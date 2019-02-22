import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import store from './store';
import Counter from './Counter';
import TestComponent from './TestComponent';
import TestContainer from './TestContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter>
          <TestContainer>
            <TestComponent />
          </TestContainer>
        </ConnectedCounter>
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

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

render(<App />, document.getElementById('root'));
