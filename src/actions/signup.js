import * as request from 'superagent'
export const SIGN_IN_INFO = 'SIGN_IN_INFO'

const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://codaisseur-auth-provider.herokuapp.com'
const thisUrl = 'http://localhost:3000'

export function actionSignUp(email, firstName, lastName, password, gender, dateOfBirth) {
    return {
        type: SIGN_IN_INFO,
        payload: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            gender: gender,
            dateOfBirth: dateOfBirth
        }
    }
}

export const signUp = (data) => (dispatch) => {
    request
        .post(`${baseUrl}/users/signup`)
        .send({ ...data })
        .then(res => {
            // if (res.status === 201) {
            //     window.history.pushState(`${thisUrl}/register-conferm`)
            // }
            const action = actionSignUp(res.body)
            dispatch(action)
        })
}