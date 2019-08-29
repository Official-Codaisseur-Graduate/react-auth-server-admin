import * as request from 'superagent'

const baseUrl = process.env.REACT_APP_AUTH_URL || 'http://172.16.31.138:5000'

export const GET_USERS = 'GET_USERS'

export const actionUserList = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const getUsers = () => dispatch => {
    console.log('inside getUsers')
    console.log(`${baseUrl}/users`)
    request
        .get(`${baseUrl}/users`)
        .then(res => {
            console.log('inside then')
            dispatch(actionUserList(res.body))
        })
        .catch(err => {
            return console.error(err)
        })

}