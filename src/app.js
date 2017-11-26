'use strict';
/**
 * 入口文件
 * @author guotingjie
 * 
 */
import './base';

$.init((err) => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    // require('./test.js');
    console.log('app is started by %s', $.env);
})