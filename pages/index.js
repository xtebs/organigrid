import React, { Component } from 'react';
import { Row, Col, Grid as Container } from 'react-bootstrap';
import css from 'styled-jsx/css';
import BaseLayout from '../layouts/BaseLayout';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Header from '../components/Header';
import Head from 'next/head';

import * as styles from '../layouts/styles';



class Page extends React.Component {

  render() {
    return (
      <BaseLayout>

        <Hero backgroundImage="static/gustavo-quepon-129114.jpg">
          <Container className="hero inner">
            <Row className="hero row">
              <Col smOffset={1} sm={10} className="hero col text">
                {heroCopy}
              </Col>
            </Row>
            <Row>asdas
              <Col smOffset={1} sm={10} className="hero col text">
              <div className="test1" >
                  {sampleSlide1}
                  {sampleSlide2}
                  {sampleSlide3}
                  {sampleSlide4}
              </div>
              </Col>
            </Row>
          </Container>
        </Hero>

        <style jsx>{homeStyles}</style>
        <style jsx global>
          {homeStylesGlobal}
        </style>
      </BaseLayout>
    );
  }
}

const heroCopy = (
  <div>
    <h1>
      {'Organi'}
      <strong style={{color:"red"}}>{'Grid '}</strong>
    </h1>
    <h3>{"SmartCity meets SmartGrid"}</h3>
    <p>
      {
        "Renewable energy has changed. "
      }
    </p>
    <p2>
      {
        "Smart Consumption Prediction. Energy Market Enabling. "
      }
    </p2>

  </div>
);

const sampleSlide1 = (
  <div className="slide">
    <div className="slide-inner">
      <ol align="center">
         <img  src="static/market.svg" />
          {"Energy Trading Market."}
      </ol>
    </div>
  </div>
);
const sampleSlide2 = (
  <div className="slide">
    <div className="slide-inner">
      <ol align="center">
      <img  src="static/graph.svg" />
       {"Consumption Smart Prediction."}
      </ol>
    </div>
  </div>
);
const sampleSlide3 = (
  <div className="slide">
    <div className="slide-inner">
    <ol align="center">
    <img  src="static/power.svg" />
     {"Load Shedding."}
    </ol>
    </div>
  </div>
);
const sampleSlide4 = (
  <div className="slide">
    <div className="slide-inner">
      <ol align="center">
      <img  src="static/mlearning.svg" />
       {"Machine Learning."}
      </ol>
    </div>
  </div>
);

const challengesCopy = (
  <p>
    {
      'Kids, you tried your best and you failed miserably. The lesson is, never try.'
    }
    <strong>{" Marge, just about everything's a sin."}</strong>
    {" Technically we're not supposed to go to the bathroom."}
  </p>
);



const homeStyles = css`
  img {
    max-height: auto;
    width: 70%;
  }
  ol {
    list-style-position: inside;
  }
`;

const homeStylesGlobal = css`
  h1, .h2, .h3, h1, h2, h3 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: "lato", sans-serif;
    font-weight: 900;
  }
  .slide {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px !important;
    width: 200px;;
    border-radius: 6px;
  }
  .test1 {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 250px !important;
    width: auto;

  }
  .slide-inner {
    width: 80%;
    height: 220px;
    background-color: rgba(255, 255, 255, 0.0);
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .hero.container-fluid {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  .hero.inner.container {
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  .hero.row {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .hero.col.text {
    display: flex;
    flex-direction: column;
    color: white;
  }
  ol {
    list-style-position: inside;
  }
  .hero h1 {
    font-size: ${styles.fontSize6}
    font-weight: 300;
  }
  .hero h1 strong {
    font-weight: 900;
  }
  .hero h2,
  .header h1 {
    font-size: ${styles.fontSize4}
    font-weight: 700;
  }
  .hero h3 {
    font-size: ${styles.fontSize2}
  }
  .home-col {
    max-height: ${styles.home.col.maxheight}
    overflow-y: hidden;
  }
  .home-col.text {
    margin-top: 4rem;
  }
  .home-row {
    margin-top: ${styles.margin}
  }
`;

export default Page;
