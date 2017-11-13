'use strict';
/**
 * 入口文件
 * @author guotingjie
 * 
 */
import path from 'path';
import projectCore from 'project-core';

const $ = global.$ = new projectCore();

$.init.add((done) => {
    $.config.load(path.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV|| null;
    if(env) {
        $.config.load(path.resolve(__dirname, '../config', env + '.js'));
    }

    $.env = env;
    done();
});

$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));

$.init((err) => {
    if(err) {
        console.error(err);
        process.exit(-1);
    }

    console.log('app is started by %s', $.env);
})