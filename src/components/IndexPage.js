import React from 'react';
//import { Link } from 'react-router';
var Link = require('react-router').Link
export default class IndexPage extends React.Component {
  render() {
    return (
<div className='main'>
      <Link to="todo">
         Goto To-do App
      </Link>
&nbsp;
      <Link to="about">
               Goto About_us
      </Link>
</div>
    );
  }
}
