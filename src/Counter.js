import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    console.log(this.state);
    this.props.dispatch({ type: 'SPLITS' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'CHANGE_ACCESSORIES' });
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
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Counter);
