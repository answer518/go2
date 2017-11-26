'use strict';

import { expect } from 'chai';
import { session } from '../test';

describe('user', function () {

    it('signup', async function () {
        const request = session();
        try {
            const ret = await request.post('/api/siginup', {
                name: 'test1',
                password: '123456789',
            });

            throw new Error('should throws missing parameter "email" error');
        } catch (err) {
            console.log(err);
            expect(err.message).to.equal('email: missing parameter "email"');
        }

        {
            const ret = await request.post('/api/siginup', {
                name: 'super',
                password: '123456789',
                email: 'super@example.com',
            });
            console.log(ret);
            expect(ret.user.name).to.equal('super');
            expect(ret.user.email).to.equal('super@example.com');
        }

        // {
        //     const ret = await request.post('/api/login', {
        //         name: 'test1',
        //         password: '123456789',
        //     });
        //     console.log(ret);
        //     expect(ret.token).to.be.a('string');
        // }

    });

});