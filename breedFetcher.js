const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q="
              + (process.argv[2] || '');

request(url, (err, res, body) => {
  if (err) return console.log(err);
  if (res && res.statusCode !== 200) {
    return console.log('status code: ' + res.statusCode);
  }
  const data = JSON.parse(body);
  if (Object.keys(data).length > 0) {
    console.log(data[0].description);
  } else {
    console.log('no breed information found for search query');
  }
});