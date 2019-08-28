import * as request from 'superagent';

const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://172.16.31.140:5000'

export const GET_USERS = 'GET_USERS';

export const actionUserList = users => {
    return {
        type: GET_USERS,
        payload: users
    };
};

export const getUsers = () => async dispatch => {
    try {
        const res = await request.get(`${baseUrl}/users`);
        return dispatch(actionUserList(res.body));
    } catch (err) {
        return console.error(err);
    }
};
