import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from './component/Header';
import Footer from './component/Footer';
import TopicDetail from './component/TopicDetail';
import TopicList from './component/TopicList';

class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children ? this.props.children : <TopicList />}
                <Footer />
            </div>
        )
    }
}
export default class App extends React.Component {
    // render 只能返回一个节点，所以需要外面包一层div,即使这个div没什么卵用
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Index}>
                        <Route path="/topic/:id" component={TopicDetail} />
                    </Route>
                </Router>
            </div>
        )
    }
}