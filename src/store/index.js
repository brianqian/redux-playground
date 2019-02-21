import rootReducer from '../reducers/rootReducer';
import { createStore } from 'redux';

import accessories from '../data/accessoryData';
import dailySplits from '../data/dailySplitData';

const defaultState = {
  accessories,
  dailySplits,
};
const store = createStore(rootReducer, defaultState);

export default store;
