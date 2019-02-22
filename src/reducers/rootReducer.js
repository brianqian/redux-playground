import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';
import ajaxRequest from './ajaxRequest';
import test from './test';

const rootReducer = combineReducers({ accessories, dailySplits, test, ajaxRequest });

export default rootReducer;
