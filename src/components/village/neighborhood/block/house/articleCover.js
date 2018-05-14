import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'

class ArticleCover extends Component {
  render() {
    return (
      	<Col lg={6}>
      		<img className="article-cover" src="./images/Article Cover.svg" />
      	</Col>
    );
  }
}

export default ArticleCover;
