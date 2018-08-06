import React, { Component } from "react";
import { connect } from "react-redux";
import { pullGuardianData, fetchData, fetchFoodItems } from '../reducers/guardian/guardian.actions.js';

class Guardian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    this.props.pullGuardianData();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }


  render() {
    const { text } = this.state;
    return (
      <div className="container">
        <form className="well" onSubmit={this.onSubmit.bind(this)}>
          <label>Search something ...</label>
          <input
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={(ev) => this.handleChange(ev)}
          />
        </form>

        <div>
          {text ? <h2 className="page-header">Results</h2> : ""}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  results: state.guardian
}), { pullGuardianData, fetchData, fetchFoodItems })(Guardian);
