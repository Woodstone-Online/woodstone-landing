/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { CONFIG } from '../config';

const instance = axios.create({ baseURL: CONFIG.apiUrl, timeout: 1000 });

instance.interceptors.response.use(null, error => {
    const isValidationError = error.response && error.response.data && error.response.data.details;
    if (isValidationError) {
        return Promise.reject(error);
    }

    const isExpectedError = error.response && error.response.data && error.response.data.message;
    if (isExpectedError) {
        return alert(error.response.data.message);
    }

    return alert('Something is broken');
});

export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    patch: instance.patch,
    delete: instance.delete,
};
