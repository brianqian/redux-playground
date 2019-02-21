import React, { Component } from 'react';
import Counter from './Counter';
import { Provider, connect } from 'react-redux';
import store from './store';
import * as actionCreators from './actions/actionCreators';
import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
