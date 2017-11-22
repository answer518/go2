'use strict';

/**
 * 频率限制
 *
 * @author guotingjie
 */

// ioredis 模块用于连接redis客户端执行命令的
import Redis from 'ioredis';

module.exports = function (done) {

    const debug = $.createDebug('init:limiter');

    const connection = new Redis($.config.get('limiter.redis'));
    const prefix = $.config.get('limiter.redis.prefix');
    $.limiter = { connection };

    /**
     * 对存储在指定key的数值执行原子的加1操作。
     * 如果指定的key不存在，那么在执行incr操作之前，会先将它的值设定为0。
     * 如果指定的key中存储的值不是字符串类型（fix：）或者存储的字符串类型不能表示为一个整数
     */
    $.limiter.incr = async function (key, limit) {
        let ret = await connection.incr(prefix + key);
        ret = Number(ret);
        debug('incr: key=%s, counter=%s', key, ret);
        if (isNaN(ret)) return false;
        if (ret > limit) return false;
        return true;
    };

    $.limiter.reset = async function (key) {
        debug('reset: key=%s', key);
        return connection.del(prefix + key);
    };

    done();

}