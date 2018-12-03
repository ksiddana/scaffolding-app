import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Guardian from './components/guardian/guardian';
import Cnn from './components/cnn/cnn';
import Header from './components/header/header';
import TechCrunch from './components/techcrunch/techcrunch';

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Guardian} />
        <Route exact path='/' component={Cnn} />
        <Route exact path='/' component={TechCrunch} />
      </div>
    </Router>
  );
};

export default Routes;
