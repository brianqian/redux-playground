import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import accessories from '../data/accessoryData';
import dailySplits from '../data/dailySplitData';

const defaultState = {
  accessories,
  dailySplits,
  test: 1,
  ajaxRequest: {
    isFetching: false,
    items: [],
  },
};

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
