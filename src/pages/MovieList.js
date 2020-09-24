import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }

    this.fetchMovies = this.fetchMovies.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then((response) => this.setState({ movies: response, loading: false }));
    })
  }

  renderMovies() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
  }

  render() {
    return (
      <div data-testid="movie-list">
        {this.renderMovies()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
