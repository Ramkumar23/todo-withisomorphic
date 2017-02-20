import React from 'react';
import { Link } from 'react-router';

export default class about extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About_Us</h1>
        <h2>Clorik is an online community where you can find content in form of photos, videos, links etc and connect with people sharing similar interests. Clorik helps you persue your passion</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
