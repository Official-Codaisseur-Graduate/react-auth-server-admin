import { USERS_ERROR } from '../actions/users';
import { SIGNUP_ERROR } from '../actions/signup';

const initialState = { errors: null, signup: null };

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USERS_ERROR:
            return { ...state, errors: payload };
        case SIGNUP_ERROR:
            return { ...state, signup: payload };
        default:
            return state;
    }
};
