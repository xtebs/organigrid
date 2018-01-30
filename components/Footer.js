import React, { Component } from 'react';
import css from 'styled-jsx/css';
import * as styles from '../layouts/styles';

class Footer extends React.Component {
  render() {
    return (
      <footer >

      </footer>
    );
  }
}

const footerStyles = css`
  .footer {
    background-color: #dedede;
    width: 100%;
    min-height: 80px;
    text-align: center;
    margin-top: ${styles.margin};
    background-color: #ee416f;
    color: #fff;
  }
`;

export default Footer;
