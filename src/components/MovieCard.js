import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading'

import * as movieAPI from '../services/movieAPI';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired }).isRequired,
};

export default MovieCard;
