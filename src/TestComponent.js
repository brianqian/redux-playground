import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestComponent extends Component {
  handleClick = () => {
    console.log(this.props);
  };

  buttonClick = e => {
    console.log(e.target.id);
    this.props.dispatch({ type: 'INCREMENT_BUTTON', index: e.target.id });
  };

  testFunc = () => {
    console.log(this.props);
  };
  render() {
    console.log(this.props);
    const days = this.props.accessories.arms.map((day, index) => (
      <button onClick={this.buttonClick} id={index}>
        {day.day}
      </button>
    ));
    return (
      console.log('rerendering component')
      <div>
        <button onClick={this.handleClick}>CONSOLE.LOG TESTCOMPONENT PROPS</button>
        <button onClick={this.testFunc}>GET POSTS</button>
        <input type="text"/>
        {this.props.children}
        {days}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessories: state.accessories,
});
export default connect(mapStateToProps)(TestComponent);
