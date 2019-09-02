/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import * as request from 'superagent';

import './ForgetPassword.css';

// const baseUrl = "http://localhost:5000"
const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://codaisseur-auth-provider.herokuapp.com';

class ForgetPasswordContainer extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await request.post(
          `${baseUrl}/users/forgetPassword`,
          {
            email,
          },
        );
        if (response.body === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        this.setState({
          showError: true,
          messageFromServer: '',
          showNullError: false,
        });
      }
    }
  };

  render() {
    const {
      email, messageFromServer, showNullError, showError
    } = this.state;
    return (
      <div className="forget-password">
        <form className="profile-form" onSubmit={this.sendEmail}>
          <TextField
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email Address"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="forgetPassword">
            Submit
          </Button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
            <Link to={'/register'}>
              Register
            </Link>
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <Link to={'/'}>
          Go Home
        </Link>
      </div>
    );
  }
}

export default ForgetPasswordContainer