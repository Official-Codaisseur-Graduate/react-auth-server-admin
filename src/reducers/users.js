import {GET_USERS} from '../actions/users'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return payload
        default:
            return state
    }
}