import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import Login from './component/Login';
import TopicDetail from './component/TopicDetail';
import NewTopic from './component/NewTopic';
import EditTopic from './component/EditTopic';
import Siginup from './component/Siginup';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="topic/:id" component={TopicDetail} />
            <Route path="topic/:id/edit" component={EditTopic} />
            <Route path="new" component={NewTopic} />
            <Route path="login" component={Login} />
            <Route path="siginup" component={Siginup} />
        </Route>
    </Router>
) , document.getElementById('app'));