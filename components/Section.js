import React, { Component } from 'react';
import { Grid as Container } from 'react-bootstrap';
import css from 'styled-jsx/css';
import * as styles from '../layouts/styles';

class Section extends React.Component {
  render() {
    return (
      <Container className="section" fluid={this.props.fluid}>
        {this.props.children}
        <style jsx global>
          {SectionStyles}
        </style>
      </Container>
    );
  }
}

const SectionStyles = css`
  .section.container {
    background-color: #fff;
  }
`;

export default Section;
