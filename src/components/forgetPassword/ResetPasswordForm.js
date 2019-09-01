import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as request from 'superagent'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

import './ForgetPassword.css';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

// const baseUrl = "http://localhost:5000"
const baseUrl = process.env.REACT_APP_AUTH_URL || 'https://codaisseur-auth-provider.herokuapp.com';

export default class ResetPasswordForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { token },
      },
    } = this.props;
    const response = await request.get(`${baseUrl}/users/reset`, {
      params: {
        resetPasswordToken: token,
      },
    });
    console.log(response);
    if (response.body.message === 'password reset link ok') {
      this.setState({
        email: response.body.email,
        updated: false,
        isLoading: false,
        error: false,
      });
    } else {
      this.setState({
        updated: false,
        isLoading: false,
        error: true,
      });
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  updatePassword = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const {
      match: {
        params: { token },
      },
    } = this.props
    try {
      const response = await request.put(
        `${baseUrl}/users/updatePassword`,
        {
          email,
          password,
          resetPasswordToken: token,
        },
      );
      if (response.body.message === 'password updated') {
        this.setState({
          updated: true,
          error: false,
        });
      } else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error.response.body);
    }
  };

  render() {
    const {
      password, error, isLoading, updated
    } = this.state;

    if (error) {
      return (
        <div className="forget-password">
          <div style={loading}>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <Link to={'/'}>
              Home
            </Link>
              <br/>
            <Link to={'/forget-password'}>
              Forget Password
            </Link>
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="forget-password">
          <div style={loading}>Loading User Data...</div>
        </div>
      );
    }
    return (
      <div className="forget-password">
        <form className="password-form" onSubmit={this.updatePassword}>
          <TextField
            id="password"
            label="password"
            onChange={this.handleChange('password')}
            value={password}
            type="password"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="forgetPassword">
            Update Password
          </Button>
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Link to={'/login'}>
              Login
            </Link>
          </div>
        )}
        <Link to={'/'}>
          Home
        </Link>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};
