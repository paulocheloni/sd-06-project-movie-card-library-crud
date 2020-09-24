import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const detailsPath = `/movies/${movie.id}`;

    return (
      <div data-testid="movie-card">
        <h1>{movie.title}</h1>
        <p>{movie.storyline}</p>
          <Link to={detailsPath}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
