import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Guardian from './components/guardian';

const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Guardian} />
    </Router>
  );
};

export default Routes;
