import { addHeader } from './csrf.jsx';
import request from 'superagent';

export function httpGET(url, data, func) {
    addHeader(request.get(url))
        .send(data)
        .end(function (err, res) {
            if (err) {
                alert(err.text);
            }
            func(err, res);
        });
}

export function httpPOST(url, data, func) {
    addHeader(request.post(url))
        .send(data)
        .end(function (err, res) {
            if (err) {
                alert(err.text);
            }
            console.dir(res);
            func(err, res);
        });
}