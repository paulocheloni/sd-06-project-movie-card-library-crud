import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="*" component={NotFound} />
      </BrowserRouter>
    </div>
  );
}

export default App;
