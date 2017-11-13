'use strict'
/**
 * router
 */

module.exports = function (done) {

    $.router.get('/', function (req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(`现在时间是${new Date}`);
    });

    $.router.get('/api/login', async function (req, res, next) {

        const user = $.method('user.get').call(req.body);

        if (!user) return next(new Error('user dones\'t exit.'));

        if (!$.utils.entryptPassword(req.body.password, user.password)) {
            return next(new Error('incorrect password'));
        }

        res.json({ success: true });
    })

    $.router.post('/api/loginout', async function (req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(`现在时间是${new Date}`);
    });

    $.router.post('/api/siginup', async function (req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(`现在时间是${new Date}`);
    })
}