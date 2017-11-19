import React from 'react';
import jQuery from 'jquery';
import { addTopic } from '../lib/client';
import {redirectURL} from '../lib/utils';
// import TopicEditor from './TopicEditor';

export default class NewTopic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    handleChange(name, e) {
        this.state[name] = e.target.value;
    }

    handleSubmit(e) {
        const $btn = jQuery(e.target);
        $btn.button('loading');
        addTopic(this.state.title, this.state.tags, this.state.content)
            .then(ret => {
                $btn.button('reset');
                alert('发帖成功！');
                redirectURL(`/topic/${ret._id}`);
            })
            .catch(err => {
                $btn.button('reset');
                alert(err);
            });
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">发表新帖子</div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="ipt-title">标题</label>
                            <input type="text" className="form-control" id="ipt-title" value={this.state.title} onChange={this.handleChange.bind(this, 'title')} placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ipt-tags">标签</label>
                            <input type="text" className="form-control" id="ipt-tags" value={this.state.tags} onChange={this.handleChange.bind(this, 'tags')} placeholder="" />
                            <p className="help-block">多个标签使用半角逗号分隔</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ipt-content">内容</label>
                            <textarea value={this.state.content} onChange={this.handleChange.bind(this, 'content')} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
                    </form>
                </div>
            </div>
        )
    }
}