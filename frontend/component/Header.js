import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="#">简单论坛系统</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="/">首页</Link>
                        </li>
                        <li><Link to="/new"><i className="glyphicon glyphicon-plus"></i> 发帖</Link></li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}