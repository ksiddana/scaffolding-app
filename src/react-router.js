import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import App from './components/app';

const Routes = () => {
  return (
    <Router>
      <div>
        <div className="nav-bar">
          <ul>
            <li><Link to="/">React Apps</Link></li>
            <li><Link to="/tabcomponent">Tab Panel</Link></li>
            <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
            <li><a href="https://tree.taiga.io" target="_blank">Tagia</a></li>
            <li><a href="https://id.heroku.com/login" target="_blank">Heroku</a></li>
        </ul>
        </div>
        <Redirect from="*" to="/" />
      </div>
    </Router>
  );
};

export default Routes;
