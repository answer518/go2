'use strict';

/**
 * 测试路由
 *
 * @author guotingjie
 */

import path from 'path';

module.exports = function (done) {

  $.router.get('*', function (req, res, next) {
    console.log(req.url + 'match *');
    if (req.url.indexOf('/api/') !== 0 && req.url.indexOf('/build/') !== 0) {
      res.sendFile(path.resolve(__dirname, '../../frontend/index.html'));
    } else {
      next();
    }
  });

  done();

};