import React, { Component } from 'react';
import Link from 'next/link';
import { Grid as Container, Row } from 'react-bootstrap';
import css from 'styled-jsx/css';
import * as styles from '../layouts/styles';

class Nav extends React.Component {
  menuItem(text, url) {
    return (
      <li>
        <Link prefetch href={url}>
          <a>{text}</a>
        </Link>
        <style jsx>{menuItemStyle}</style>
      </li>
    );
  }

  render() {
    return (
      <Container fluid="true" className="nav-container">
        <Container>
          <Row className="show-grid">
            <nav>
              <NavSection sectionClass="left">
                {this.menuItem('Home', '/')}
                {this.menuItem('About', '/about')}
                {this.menuItem('City Map', '/map')}
                {this.menuItem('Team', '/team')}
              </NavSection>
              <NavSection sectionClass="right">
                {this.menuItem('Login', '/login')}
                {this.menuItem('Get Involved', '/register')}
              </NavSection>
            </nav>
          </Row>
          <style jsx>{navStyle}</style>
          {/*fkn react-bootstrap doe snot work with styled-jsx. Styles affecting bs have to be global:*/}
          <style jsx global>
            {bootstrapStyle}
          </style>
        </Container>
      </Container>
    );
  }
}

class NavSection extends React.Component {
  render() {
    return (
      <ul className={this.props.sectionClass}>
        {this.props.children}
        <style jsx>{navSectionStyle}</style>
      </ul>
    );
  }
}

const bootstrapStyle = css`
  .nav-container.container-fluid {
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    z-index: 100;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const navStyle = css`
  nav {
    min-height: ${styles.nav.height};
    width: 100%;
    font-family: 'Lato', sans-serif;
    *: 300;
    font-size: 25px;
    position: relative;
  }
`;

const navSectionStyle = css`
  ul {
    list-style: none;
    display: inline-block;
    height: ${styles.nav.height};
  }
  ul:before {
    content: '';
    display: inline-block;
    height: 100%;
    transform: translateX(-100%);
    vertical-align: middle;
  }
  ul.left {
    position: absolute;
    left: 0;
  }
  ul.right {
    position: absolute;
    right: 0;
  }
`;

const menuItemStyle = css`
  li {
    display: inline-block;
    vertical-align: middle;
    margin: 0 12px;
  }
  a {
    text-decoration: none;
    color: #444;
    padding: 12px 24px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
  }
  a:hover {
    border-bottom: 1px solid #444;
    transition: border-bottom 0.5s;
  }
`;

export default Nav;
export { NavSection };
