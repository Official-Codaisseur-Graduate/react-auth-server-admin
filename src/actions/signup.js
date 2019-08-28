import * as request from 'superagent'
export const SIGN_IN_INFO = 'SIGN_IN_INFO'

const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://172.16.31.138:5000'
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
            if (res.status === 201) {
                window.history.pushState(`${thisUrl}/register-conferm`)
            }
        })
}