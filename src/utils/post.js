import axios from '../utils/request'
import qs from 'qs'

export function post(url, data = {}, json = false) {
    // json格式请求头
    const headerJSON = {
        "Content-Type": "application/json"
    };
    // FormData格式请求头
    const headerFormData = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    };
    return new Promise((resolve, reject) => {
        axios
            .post(url, json ? JSON.stringify(data) : qs.stringify(data), {
                headers: json ? headerJSON : headerFormData
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}