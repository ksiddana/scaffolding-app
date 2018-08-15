import React, { Component } from "react";
import { connect } from "react-redux";
import { pullGuardianData, handlePaginationClick } from '../reducers/guardian/guardian.actions.js';
// import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';

const Pagination = ({ handlePaginationClick }) => {
  const pages = [1,2,3,4,5];
  return (
    <div className="pagination-wrapper">
      {pages.map((pageNumber, index) => {
        return (
          <button
            key={index}
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
  }

  componentDidMount() {
    this.props.pullGuardianData();
  }

  renderArticle(article) {
    const { webTitle, webUrl, webPublicationDate } = article;
    const event = new Date(webPublicationDate.toString());
    const date = event.toDateString();

    return (
      <div className="news-container" key={webTitle}>
        <a href={webUrl} target="_blank">{webTitle}</a>
        <div><em>Date: {date}</em></div>
      </div>
    );
  }

  render() {
    const { results, handlePaginationClick } = this.props;

    return (
      <div className="loader">
        {results.length > 0 && results.map(article => this.renderArticle(article))}
        {results.length > 0 && <Pagination
          handlePaginationClick={handlePaginationClick}
        />}
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
