import broswerRequest from 'browser-request';

const urlBase = '/api';

export function request(method, path, data) {
    return new Promise((resolve, reject) => {
        method = method.toUpperCase();
        const option = {
            method,
            url : `${urlBase}/${path}`
        }
        if(method === 'GET' || method === 'HEAD') {
            option.qs = data;
        } else {
            option.form = data;
        }

        broswerRequest(option, (err, res, body) => {
            if(err) {
                reject(err);
            } else {
                let data;
                try{
                    data = JSON.parse(body.toString());
                } catch(err) {
                    return reject(new Error('parse json data error : ' + err.message));
                }
                if(data.err) {
                    reject(data.err);
                } else {
                    resolve(data.result);
                }

            }
        });
    })
}

export function getTopicList(option) {
    return request('get', 'topic/list', option);
}

export function getTopicDetail(id) {
    return request('get', `topic/item/${id}`, {}).then((ret) => ret.topic);
}