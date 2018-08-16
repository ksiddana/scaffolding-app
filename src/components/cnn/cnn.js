import React, { Component } from 'react';
import { connect } from "react-redux";
import { pullCnnHeadlinesData } from '../../reducers/cnn/cnn.actions.js';

class Cnn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.pullCnnHeadlinesData();
  }

  renderArticle(article) {
    const { title, url, description, publishedAt } = article;
    const event = new Date(publishedAt.toString());
    const date = event.toDateString();

    return (
      <div className="news-container" key={title}>
        <a href={url} target="_blank">{title}</a>
        <div>{description}</div>
        <div className="publication-date">{date}</div>
      </div>
    );
  }

  render() {
    const { results } = this.props;

    return (
      <div className="loader">
        {results.length > 0 && results.map(article => this.renderArticle(article))}
      </div>
    );
  }
}

export default connect(state => ({
  results: state.cnn.results
}),
{
  pullCnnHeadlinesData
})(Cnn);
