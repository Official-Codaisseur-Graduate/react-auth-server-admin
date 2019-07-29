import { SIGN_IN_INFO } from '../actions/signup';

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_INFO:
            return payload
        default:
            return state
    }
}