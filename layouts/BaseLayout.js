import React, { Component } from 'react';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

class BaseLayout extends Component {
  render() {
    // add page head and footer
    return (
      <div>
        <Meta />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
