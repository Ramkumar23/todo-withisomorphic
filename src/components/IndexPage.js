import React from 'react';
import AthletePreview from './AthletePreview';
import  from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome</h1>
        <img src='../static/img/logo.png' alt='org logo' />
        <p>
          <Link to="/todo">Go back to the main page</Link>
          <Link to="/about">Go back to the main page</Link>
        </p>

        </div>
      </div>
    );
  }
}
