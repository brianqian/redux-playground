import rootReducer from '../reducers/rootReducer';
import { createStore } from 'redux';

import accessories from '../data/accessoryData';
import dailySplits from '../data/dailySplitData';

const defaultState = {
  accessories,
  dailySplits,
  test: 1,
};
const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
