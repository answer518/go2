import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {getTopicList} from './lib/client';

getTopicList({}).then((ret) => console.log(ret))
.catch((err) => console.log(err));

ReactDom.render(<App /> , document.body);