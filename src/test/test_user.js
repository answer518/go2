'use strict';

import { expect } from 'chai';
import { session } from '../test';
import { throws } from 'assert';

describe('user', function () {

    it('signup', async function () {
        const request = session();
        try {
            const ret = await request.post('/api/siginup', {
                name: 'super1',
                password: '12345678',
            });

            throw new Error('should throws missing parameter "email" error');
        } catch (err) {
            console.log(err);
            expect(err.message).to.equal('email: missing parameter "email"');
        }

        {
            const ret = await request.post('/api/siginup', {
                name: 'super',
                password: '12345678',
                email: 'super@example.com',
            });
            console.log(ret);
            expect(ret.user.name).to.equal('super');
            expect(ret.user.email).to.equal('super@example.com');
        }

        {
            try {
                const ret = await request.post('/api/login', {
                    name: 'super',
                    password: '123456789',
                });
                // console.log(ret);
                // expect(ret.token).to.be.a('string');

                throw new Error('shold throw Error: incorrect password');
            } catch(e) {
                expect(e.message).to.equal('Error: incorrect password');
            }
        }

        {
            const ret = await request.post('/api/login', {
                name: 'super',
                password: '12345678'
            });

            console.log(ret);
            expect(ret.token).to.be.a('string'); // 判断数据类型是字符串
        }

    });

});