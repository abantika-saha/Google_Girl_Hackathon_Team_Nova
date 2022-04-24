import { combineReducers } from 'redux';

import auth from './auth';
import doubts from './doubts';


export const reducers = combineReducers({ auth, doubts });
