import React, { Component } from 'react';
import { connect } from "react-redux";
import './header.css';
import { loginUser } from '../../reducers/cnn/cnn.actions.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginBox: false,
      user: {
        username: '',
        password: ''
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.loginUser({ username, password });
  }

  renderLoginBox() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" placeholder="Enter Username" ref="username"/>
        <input type="text" placeholder="Enter password" ref="password"/>
        <input type="submit" value="Login" />
      </form>
    )
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">Today's Headlines</div>
        <button onClick={() => {this.setState({ showLoginBox: !this.state.showLoginBox })}}>Login</button>
        {this.state.showLoginBox && this.renderLoginBox()}
      </div>
    );
  }
};

export default connect(state => ({
  results: state.guardian.results
}),
{ loginUser
})(Header);
