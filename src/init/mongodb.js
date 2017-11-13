'use strict'
/**
 * mongo 数据库配置
 */
import mongoose from 'mongoose';

module.exports = function(done) {
    const db = mongoose.createConnection($.config.get('db.mongodb'));

    $.mongodb = db;
    done();
}