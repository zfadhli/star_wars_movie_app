var express = require('express');
var router = express.Router();
var moviesJSON = require('../data/movies.json');

router.get('/', (req, res) => {
  var movies = moviesJSON.movies;

  res.render('index', {
    title: 'Star Wars',
    movies: movies
  });
});

router.get('/star_wars_episode/:id', (req, res) => {
  var episode = req.params.id;
  var movies = moviesJSON.movies;
  var movie = movies[episode - 1];

  if (episode < 0 || episode > movies.length) {
    res.render('error', {
      message: 'Not Found',
      error: '404',
      title: 'error',
      movies: movies
    });
  } else {
    res.render('movie_single', {
      title: 'Star Wars',
      movies: movies,
      movie: movie
    });
  }
});

module.exports = router;
