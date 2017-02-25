import React from 'react';
import { Link } from 'react-router';

export default class About_us extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <p>
            Todo with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
        <Link to="todo">
          Goto To-do App
       </Link>
&nbsp;
        <Link to="/">
                Goto Home
       </Link>
      </div>
    );
  }
}
