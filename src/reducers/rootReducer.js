import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';
import test from './test';

const rootReducer = combineReducers({ accessories, dailySplits, test });

export default rootReducer;
