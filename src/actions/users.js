import * as request from 'superagent';

const baseUrl =
    process.env.REACT_APP_AUTH_URL ||
    'https://codaisseur-auth-provider.herokuapp.com';

export const GET_USERS = 'GET_USERS';

export const USERS_ERROR = 'USERS_ERROR';

export const actionUserList = payload => ({
    type: GET_USERS,
    payload
});

export const actionUserError = payload => ({
    type: USERS_ERROR,
    payload
});

export const getUsers = () => async dispatch => {
    try {
        const { body } = await request.get(`${baseUrl}/users`);

        dispatch(actionUserError(null));
        return dispatch(actionUserList(body));
    } catch (err) {
        return dispatch(actionUserError(err));
    }
};
