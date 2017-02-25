import React from 'react';
import { Link } from 'react-router';
let {Component, PropTypes} = React;
export default class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" alt="logo" src="/img/logo.png" />
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
             Copyright © 2016 by Clorik
          </p>
        </footer>

      </div>
    );
  }
}
Layout.propTypes={
  children :PropTypes.node.isRequired,
};
