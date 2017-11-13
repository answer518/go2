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

$.createDebug = function(name) {
    return createDebug('my:' + name);
}

const debug = $.createDebug('app');

$.init.add((done) => {
    $.config.load(path.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV|| null;
    if(env) {
        debug('load env: %s', env);
        $.config.load(path.resolve(__dirname, '../config', env + '.js'));
    }

    $.env = env;
    done();
});

$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(path.resolve(__dirname, 'model'));
$.init.load(path.resolve(__dirname, 'service'));

$.init.load(path.resolve(__dirname, 'init', 'express.js'));
$.init.load(path.resolve(__dirname, 'router'));

$.init((err) => {
    if(err) {
        console.error(err);
        process.exit(-1);
    }
    // const item = new $.model.User({
    //     name: `User${$.utils.date('ymdHis')}`,
    //     password: '1234567',
    //     nikename: '小果果'
    // });

    // item.save(console.log);

    console.log('app is started by %s', $.env);
})