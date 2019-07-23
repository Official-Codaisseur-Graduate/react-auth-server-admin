import * as request from 'superagent'

const baseUrl = 'http://172.16.31.64:5000'

export const GET_USERS = 'GET_USERS'

export const actionUserList =  (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const getUsers = () => {
    return async function(dispatch) {
        request
            .get(`${baseUrl}/users`)
            .then(res => {
                dispatch(actionUserList(res.body))
            })
            .catch(err => console.log(err))
    }
}