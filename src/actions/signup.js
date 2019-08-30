import * as request from 'superagent';

const baseUrl =
    process.env.REACT_APP_AUTH_URL ||
    'https://codaisseur-auth-provider.herokuapp.com';
const thisUrl = 'https://localhost:3000';

export const SIGN_IN_INFO = 'SIGN_IN_INFO';

export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const actionSignUp = (
    email,
    firstName,
    lastName,
    password,
    gender,
    dateOfBirth
) => ({
    type: SIGN_IN_INFO,
    payload: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        gender: gender,
        dateOfBirth: dateOfBirth
    }
});

export const actionSignUpError = payload => ({
    type: SIGNUP_ERROR,
    payload
});

export const signUp = data => async dispatch => {
    try {
        const { status, body } = await request
            .post(`${baseUrl}/users/signup`)
            .send({ ...data });

        if (status === 201) {
            window.history.pushState(`${thisUrl}/register-conferm`);
        }

        dispatch(actionSignUpError(null));
        return dispatch(actionSignUp(body));
    } catch (err) {
        return actionSignUpError(err);
    }
};
