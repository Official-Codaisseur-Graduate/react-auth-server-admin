import * as request from 'superagent';

// const baseUrl = process.env.REACT_APP_AUTH_URL || 'http://172.16.31.138:5000';
const baseUrl =
    process.env.REACT_APP_AUTH_URL ||
    'https://codaisseur-auth-provider.herokuapp.com';

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
