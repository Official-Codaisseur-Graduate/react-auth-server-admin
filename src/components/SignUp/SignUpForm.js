import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MenuItem, InputLabel } from '@material-ui/core';
// import { Link } from 'react-router-dom';

export class SignUpForm extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirmation: '',
        gender: '',
        dateOfBirth: '',
        passwordValidation: 'Validate password'
    };

    onSubmit = event => {
        event.preventDefault();
        // if (this.state.password !== this.state.passwordConfirmation) {
        //     alert('Password must be identical')
        // }

        const valid = () => {
            if (this.state.password !== this.state.passwordConfirmation) {
                // alert('Passwords must be identical')
                this.setState({
                    passwordValidation: 'Passwords must match.'
                });
                return false;
            }

            return true;
        };

        // valid info --> create account
        if (valid()) {
            //Send data to SignUpContainer.js
            this.props.onSubmit(this.state);

            //Reset state
            this.setState({
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passwordConfirmation: '',
                gender: '',
                dateOfBirth: '',
                passwordValidation: 'Validate password'
            });
        }
    };

    onChange = event => {
        const { name, value } = event.target;

        //Set the state property's to the value typed in
        this.setState({
            [name]: value
        });
    };

    // Changes label of password confirmation input so user can see whether passwords are the same
    onValidatePasswordChange = event => {
        if (event.target.value !== this.state.password) {
            this.setState({
                passwordConfirmation: event.target.value,
                passwordValidation: 'Passwords must match.'
            });
        } else {
            this.setState({
                passwordConfirmation: event.target.value,
                passwordValidation: 'Validate password'
            });
        }
    };

    render() {
        return (
            <div>
                <form className="signUpForm" onSubmit={this.onSubmit}>
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
                                inputProps={{ minLength: 8 }}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                id="passwordConfirmation"
                                label={this.state.passwordValidation}
                                name="passwordConfirmation"
                                onChange={this.onValidatePasswordChange}
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
                        // component={Link} to={"/login"}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
