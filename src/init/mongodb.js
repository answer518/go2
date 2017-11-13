'use strict'
/**
 * mongo 数据库配置
 */
import mongoose from 'mongoose';

module.exports = function(done) {
    const db = mongoose.createConnection($.config.get('db.mongodb'));

    const debug = $.createDebug('init:mongodb');
    debug('connection to MongoDB');
    $.mongodb = db;
    $.model = {};
    done();
}