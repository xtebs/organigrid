import React, { Component } from 'react';
import Head from 'next/head';

class Meta extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{'OC Lisboa'}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          {fonts()}
          {stylesheets()}
        </Head>
        {/* global styles go here. First line is a browser reset.*/}
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            font-size: 16px;
            color: #444;
          }
        `}</style>
      </div>
    );
  }
}

const fonts = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,900|Roboto:300"
    rel="stylesheet"
  />
);

const stylesheets = () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </div>
);

export default Meta;
