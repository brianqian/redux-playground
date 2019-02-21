import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import store from './store';
import Counter from './Counter';
import RootContainer from './RootContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp>
          <Counter />
        </ConnectedApp>
      </Provider>
    );
  }
}
const mapStateToProps = state => ({
  accessories: state.accessories,
  dailySplits: state.dailySplits,
  test: state.test,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

render(<App />, document.getElementById('root'));
