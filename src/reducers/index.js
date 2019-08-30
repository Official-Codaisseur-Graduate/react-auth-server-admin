import { combineReducers } from 'redux';

import signup from './signup';
import users from './users';

import errors from './errors';

export default combineReducers({ signup, users, errors });
