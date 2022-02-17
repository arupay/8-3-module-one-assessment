/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let arr = [];
  for (let movie of movies) {
    arr.push(movie.title);
  }
  return arr;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
// function checkEmpty(arr, this){
//   if (!arr.length){
//     return this
//   }
// }

function getHighestMetascore(movies) {
  if (!movies.length) {
    return 0;
  }
  let controlMovie = movies[0].metascore;
  for (let movie of movies) {
    if (movie.metascore >= controlMovie) {
      controlMovie = movie.metascore;
    }
  }
  return Number(controlMovie);
}

// console.log(getHighestMetascore(exampleMovies));
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (!movies.length) {
    return 0;
  }
  let sum = 0;
  for (let movie of movies) {
    sum += Number(movie.imdbRating);
  }
  return sum / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

function ratingArrayMaker(movies) {
  let arr = [];
  for (let movie of movies) {
    arr.push(movie.rated);
  }
  return arr;
}
// console.log(countByRating(exampleMovies));

function countByRating(movies) {
  if (!movies.length) {
    return {};
  }
  let ratingsObj = {};
  let ratingsArray = ratingArrayMaker(movies);
  for (let rating of ratingsArray) {
    if (ratingsObj[rating]) {
      ratingsObj[rating] += 1;
    } else {
      ratingsObj[rating] = 1;
    }
  }
  return ratingsObj;
}

// * wordCount accepts a sentence and returns an object of word frequencies.
// *
// * @param {String} sentence
// * @returns {Object} - Object mapping words to word counts
// *
// * Ex:
// *
// * wordCount("fly away fly away visit the moon")
// * => {fly: 2, away: 2, visit: 1, the: 1, moon: 1}
// */
// function wordCount(sentence) {
//  // 1. transform sentence into an array of words
//  let words = sentence.split(" ");

//  // 2. Create word frequency object. Default value should be {}
//  let wordFrequencies = {};
//  // 3. Iterate through our array of words
//  for (let word of words) {
//    // lookup key for our current word
//    if (wordFrequencies[word]) {
//      // if it does exist, increment its value by 1
//      wordFrequencies[word] += 1;
//    } else {
//      // if no key exists yet, assign it a value 1
//      wordFrequencies[word] = 1;
//    }
//  }

//  return wordFrequencies;
// }

// console.log(wordCount("fly away fly away visit the moon"));

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  for (let movie of movies) {
    if (movie.imdbID === id) {
      return movie;
    }
  }
  return null;
}

// console.log(findById(exampleMovies, "tt20963"));

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let arr = [];
  if (!movies.length) {
    return arr;
  }
  for (let movie of movies) {
    if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {
      arr.push(movie);
    }
  }
  return arr;
}

// console.log(filterByGenre(exampleMovies, "Family"));

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function isolateYear(movie) {
  let releaseYear = Number(movie.released.slice(7, 11));
  return releaseYear;
}

// helper function to isolate year in released string and turn it into a num

function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let arr = [];
  for (let movie of movies) {
    let movieYear = isolateYear(movie);
    if (year >= movieYear) {
      arr.push(movie);
    }
  }
  return arr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */

function convertToNum(movie) {
  let removeCurrencyVal = movie.boxOffice.slice(1);
  let removeCommas = removeCurrencyVal.split(",").join(""); //split to array at comma separator, join back to string without
  return Number(removeCommas);
}

function getBiggestBoxOfficeMovie(movies) {
  if (!movies.length) {
    return null;
  }
  let controlMovie = movies[0];
  for (let movie of movies) {
    if (convertToNum(movie) >= convertToNum(controlMovie)) {
      controlMovie = movie;
    }
  }
  return controlMovie.title;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
