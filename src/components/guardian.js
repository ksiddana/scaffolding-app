import React, { Component } from "react";
import { connect } from "react-redux";
import { pullGuardianData, handlePaginationClick } from '../reducers/guardian/guardian.actions.js';
// import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';

const Pagination = ({ handlePaginationClick }) => {
  const pages = [1,2,3,4,5];
  return (
    <div className="pagination-wrapper">
      {pages.map((pageNumber) => {
        return (
          <button
            onClick={() => handlePaginationClick(pageNumber)}
          >{pageNumber}</button>
        );
      })}
    </div>
  );
};

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

  renderArticle(article) {
    const { webTitle, webUrl } = article;

    return (
      <div className="news-container">
        <a href={webUrl} target="_blank">{webTitle}</a>
      </div>
    );
  }

  render() {
    const { results, handlePaginationClick } = this.props;

    return (
      <div>
        {results.map(article => this.renderArticle(article))}
        <Pagination
          handlePaginationClick={handlePaginationClick}
        />
      </div>
    );
  }
}

export default connect(state => ({
  results: state.guardian.results
}),
{
  pullGuardianData,
  handlePaginationClick
})(Guardian);
