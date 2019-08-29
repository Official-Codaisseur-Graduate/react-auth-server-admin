import { combineReducers } from 'redux';

import signup from './signup';
import users from './users';

export default combineReducers({ signup, users });
