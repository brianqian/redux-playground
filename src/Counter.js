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
    this.props.dispatch({ type: 'INCREMENT' });
  };
  testDec = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <h1>Accessory</h1>
          <p>test num: {this.props.test}</p>
          <button onClick={this.testInc}>+</button>
          <button onClick={this.testDec}>-</button>
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
export default connect(mapStateToProps)(Counter);
