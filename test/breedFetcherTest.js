// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  //When the breed is invalid, the api requestion doesn't actuall
  //return an error. It returns an empty array and error is null
  //contrary to what the instructions say, which is that it would 
  //return an error
  it('returns an empty string for an invalid breed', (done) => {
    fetchBreedDescription('Himi', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // compare returned description
      assert.equal('', desc);
      done();
    });
  });
});
  