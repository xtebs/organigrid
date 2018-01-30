import React, { Component } from 'react';
import { Grid as Container } from 'react-bootstrap';
import css from 'styled-jsx/css';
import * as styles from '../layouts/styles';

class Header extends React.Component {
  render() {
    return (
      <Container className="header" fluid="true">
        {this.props.children}
        <style jsx global>
          {`
            .header.container-fluid {
              background-color: #ee416f;
              color: #fff;
              text-align: center;
              margin-top: ${styles.margin};
            }
            .header.container-fluid > * {
              margin: 16px 0;
            }
          `}
        </style>
      </Container>
    );
  }
}

export default Header;
