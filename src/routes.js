import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MoviesHome from './pages/MoviesHome';
import LikedMovies from './pages/LikedMovies';
import DislikedMovies from './pages/DislikedMovies';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={MoviesHome} exact />
      <Route path="/LikedMovies" component={LikedMovies} />
      <Route path="/DislikedMovies" component={DislikedMovies} />
    </BrowserRouter>
  );
}

export default Routes;
