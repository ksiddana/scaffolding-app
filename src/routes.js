import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Guardian from './components/guardian/guardian';
import Header from './components/header/header';

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Guardian} />
      </div>
    </Router>
  );
};

export default Routes;
