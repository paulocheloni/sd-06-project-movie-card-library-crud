import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="" component={NotFound} />
    </Router>
  );
}

export default App;
