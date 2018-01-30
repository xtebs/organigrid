import React, { Component } from 'react';
import { Grid as Container } from 'react-bootstrap';
import css from 'styled-jsx/css';
import * as styles from '../layouts/styles';

class Hero extends React.Component {
  render() {
    return (
      <Container fluid="true" className="hero">
        {this.props.children}
        <style jsx global>
          {heroStyles}
        </style>
        {/*dumb styled-jsx does not allow dynamic css from external references...*/}
        <style jsx global>{`
          .hero.container-fluid {
            background-image: url(${this.props.backgroundImage});
          }
        `}</style>
      </Container>
    );
  }
}

//class Slide extends React.Component {

const heroStyles = css`
  .hero.container-fluid {

    background-color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    min-height: 100vh;
    min-width: 100%;
    z-index: 1;
  }
  .hero.container-fluid:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(17, 17, 19, 0.4);
  }
`;

export default Hero;
