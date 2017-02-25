import React from 'react';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import App from './components/app';
import IndexPage from './components/IndexPage';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import About_us from './components/About_us';

const routes = (
 <Router history = {browserHistory}>
        <Route path="/" component={Layout} >
                 <IndexRoute component = {IndexPage} />
                 <Route path="todo" component={App}/>
                 <Route path="about" component={About_us}/>
                 <Route path="*" component={NotFoundPage}/>
        </Route>
  </Router>
);
export default routes;
