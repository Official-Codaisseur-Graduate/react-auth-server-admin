import * as request from 'superagent'

const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://codaisseur-auth-provider.herokuapp.com'

export const GET_USERS = 'GET_USERS'

export const actionUserList = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const getUsers = () => dispatch => {
    request
        .get(`${baseUrl}/users`)
        .then(res => {
            const action = actionUserList(res.body)
            dispatch(action)
        })
        .catch(err => {
            return console.error(err)
        })

}