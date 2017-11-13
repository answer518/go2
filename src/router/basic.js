'use strict'
/**
 * router
 */

module.exports = function(done) {

    $.router.get('/', function(req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end(`现在时间是${new Date}`);
    })
}