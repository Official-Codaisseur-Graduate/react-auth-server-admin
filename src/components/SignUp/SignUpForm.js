import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MenuItem, InputLabel } from '@material-ui/core';


export class SignUpForm extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirmation: '',
        gender: '',
        dateOfBirth: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.password !== this.state.passwordConfirmation) {
            alert('Password must be identical')
        }
        console.log(this.state)
        this.props.onSubmit(this.state)
        
        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
            gender: '',
            dateOfBirth: ''
        })


    }

    onChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <form className="signUpForm" noValidate onSubmit={this.onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="text"
                                id="password"
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="text"
                                id="passwordConfirmation"
                                label="Validate password"
                                name="passwordConfirmation"
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                variant="outlined"
                                required
                                fullWidth
                                id="gender"
                                value={this.state.gender}
                                name="gender"
                                onChange={this.onChange}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                onChange={this.onChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="signUpButton"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }
}

export default SignUpForm
