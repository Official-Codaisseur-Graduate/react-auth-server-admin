import * as request from 'superagent';

const baseUrl = process.env.REACT_APP_AUTH_URL || 'http://172.16.31.64:5000';

export const GET_USERS = 'GET_USERS';

export const actionUserList = users => {
    return {
        type: GET_USERS,
        payload: users
    };
};

export const getUsers = () => dispatch => {
    return request
        .get(`${baseUrl}/users`)
        .then(res => {
            dispatch(actionUserList(res.body));
        })
        .catch(err => console.error(err));
};
