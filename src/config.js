'use strict'
/**
 * 默认配置文件
 * @author guotingjie
 * @param {*} set 
 * @param {*} get 
 * @param {*} has 
 */
module.exports = function (set, get, has) {
    set('web.port', 3000);
    set('web.session.secret', 'test');
    set('web.session.redis', {
        host: '127.0.0.1',
        port: 6379
    });

    // limit redis connection
    set('limiter.redis', {
        host: '127.0.0.1',
        port: 6379,
        prefix: 'L:'
    });

    // captcha redis connection
    set('captcha.redis', {
        host: '127.0.0.1',
        port: 6379,
        prefix: 'C:',
    });
}