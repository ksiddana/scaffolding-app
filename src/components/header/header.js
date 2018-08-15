import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">Today's Headlines</div>
      </div>
    );
  }
};

export default Header;
