import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import movies from "./pages/movies"
import liked from "./pages/liked"
import disliked from "./pages/disliked"


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={movies} exact />
      <Route path="/liked" component={liked} />
      <Route path="/disliked" component={disliked} />
    </BrowserRouter>
  )
}

export default Routes;