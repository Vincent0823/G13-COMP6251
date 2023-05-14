import axios from '../utils/request'

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}