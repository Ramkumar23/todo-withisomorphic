import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div ClassName="main">
        <h1>404</h1>
        <h2>Page not found!</h2>

        <Link to="about">          Goto About_us
       </Link>&nbsp;
        <Link to="/">
                Goto Home
       </Link>
      </div>
    );
  }
}
