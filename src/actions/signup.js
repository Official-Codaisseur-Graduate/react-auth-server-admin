
export const SIGN_IN_INFO = 'SIGN_IN_INFO'

export function signUp(email, firstName, lastName, password, gender, dateOfBirth) {
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