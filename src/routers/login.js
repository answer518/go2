'use strict'
/**
 * router
 */

module.exports = function (done) {

    // $.router.get('/', function (req, res, next) {
    //     res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    //     res.end(`现在时间是${new Date}`);
    // });

    $.router.get('/api/login_user', async function (req, res, next) {
        // res.apiSuccess({ user: req.session.user, token: req.session.logout_token });
        res.json({ user: req.session.user, token: req.session.logout_token });
    });

    $.router.post('/api/login', async function (req, res, next) {

        if (!req.body.password) return next(new Error('missing password'));

        const user = await $.method('user.get').call(req.body);
        if (!user) return next(new Error('user does not exists'));

        if (!$.utils.validatePassword(req.body.password, user.password)) {
            return next(new Error('incorrect password'));
        }

        req.session.user = user;
        req.session.logout_token = $.utils.randomString(20);

        res.json({ success: true, token: req.session.logout_token });
    })

    $.router.post('/api/loginout', async function (req, res, next) {
        if (req.session.logout_token && req.query.token !== req.session.logout_token) {
            return next(new Error('invalid token'));
        }

        delete req.session.user;
        delete req.session.logout_token;

        res.json({ success: true });
    });

    $.router.post('/api/siginup', async function (req, res, next) {
        const user = await $.method('user.add').call(req.body);
        res.json({ user: user });
    });

    // 必须done才会执行methods, 注意要理解一下中间件机制
    done();
}