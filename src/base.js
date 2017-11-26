'use strict';
/**
 * 入口文件
 * @author guotingjie
 * 
 */
import path from 'path';
import projectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$ = new projectCore();

$.createDebug = function (name) {
    return createDebug('my:' + name);
}

const debug = $.createDebug('app');

$.init.add((done) => {
    $.config.load(path.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV || null;

    if (env) {
        env.split(',').forEach((item, i) => {
            debug('load env: %s', item);
            $.config.load(path.resolve(__dirname, '../config', item + '.js'));
        });
    }

    $.env = env;
    done();
});

$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(path.resolve(__dirname, 'models'));
$.init.load(path.resolve(__dirname, 'services'));

$.init.load(path.resolve(__dirname, 'init', 'express.js'));
$.init.load(path.resolve(__dirname, 'init', 'limiter.js'));

// 初始化中间件
$.init.load(path.resolve(__dirname, 'middlewares'));
$.init.load(path.resolve(__dirname, 'routers'));