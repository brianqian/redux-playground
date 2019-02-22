import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'SPLITS' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'CHANGE_ACCESSORIES' });
  };
  testInc = () => {
    console.log(this.props);
    this.props.increment();
  };
  testDec = () => {
    this.props.decrement();
  };
  testing = () => {
    console.log(this.props);
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <button onClick={this.testing}>TEST</button>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <p>test num: {this.props.test}</p>
          <button onClick={this.testInc}>+</button>
          <button onClick={this.testDec}>-</button>
          <input type="text" />
          {this.props.children}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accessories: state.accessories,
  dailySplits: state.dailySplits,
  test: state.test,
});
export default Counter;
