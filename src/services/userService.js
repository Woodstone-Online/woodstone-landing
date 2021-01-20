import http from './httpService';

const endpoint = '/users';

export function createUser(data) {
    return http.post(endpoint, { ...data, project: null });
}

export function makePreferences(interestId) {
    return { interest: { value: interestId } };
}
