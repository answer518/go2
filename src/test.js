'use strict'
/**
 * test crud
 */

// $.method('user.add').call({
//     name: `test7`,
//     email: 'test7@qq.com',
//     password: '1234567',
//     nikename: 'i am test7'
// }, console.log);

import supertest from 'supertest';
import './app.js';

function makeRequest(agent, method, path, params) {
    return new Promise((resolve, reject) => {
        $.ready(() => {
            params = params || {};
            agent = agent || supertest($.express);
            let req = agent[method](path);
            if (method === 'get' || method === 'head') {
                req = req.query(params);
            } else {
                req = req.send(params);
            }
            req.expect(200).end((err, res) => {
                if (err) return reject(err);

                if (res.body.success) {
                    resolve(res.body.result);
                } else {
                    reject(new Error(res.body.error));
                }
            });
        });
    });
}

function generateRequestMethod(agent, method) {
    return function (path, params) {
        return makeRequest(agent, method, path, params);
    }
}

function generateRequestSuite(agent) {
    return {
        get: generateRequestMethod(agent, 'get'),
        post: generateRequestMethod(agent, 'post'),
        put: generateRequestMethod(agent, 'put'),
        delete: generateRequestMethod(agent, 'delete'),
    };
}

export var request = generateRequestSuite(false);
export function session() {
    return generateRequestSuite(supertest.agent($.express));
}