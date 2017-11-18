import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import TopicDetail from './component/TopicDetail';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/topic/:id" component={TopicDetail} />
        </Route>
    </Router>
) , document.getElementById('app'));