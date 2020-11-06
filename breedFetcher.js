const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (err, res, body) => {
    if (err) {
      return callback(err, null);
    }
    if (res && res.statusCode !== 200) {
      return callback(null, 'status code: ' + res.statusCode);
    }
    const data = JSON.parse(body);
    let toReturn = '';
    if (Object.keys(data).length === 0) {
      console.log('no breed information found for search query');
    } else {
      toReturn = data[0].description;
    }
    return callback(null, toReturn);
  });
};

module.exports = { fetchBreedDescription };