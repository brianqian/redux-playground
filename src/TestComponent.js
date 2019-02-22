import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testFunc } from './actions/actionCreators';

class TestComponent extends Component {
  handleClick = () => {
    console.log(this.props);
  };

  buttonClick = e => {
    console.log(e.target.id);
    this.props.dispatch({ type: 'INCREMENT_BUTTON', index: e.target.id });
  };

  getPosts = () => {
    this.props.dispatch({ type: 'FETCH_ITEMS' });
  };

  testFunc = () => {
    this.props.dispatch(testFunc('hello'));
  };
  render() {
    const days = this.props.accessories.arms.map((day, index) => (
      <button onClick={this.buttonClick} id={index}>
        {day.day}
      </button>
    ));
    return (
      <div>
        <button onClick={this.handleClick}>CONSOLE.LOG TESTCOMPONENT PROPS</button>
        <button onClick={this.getPosts}>GET POSTS</button>
        <button onClick={this.testFunc}>testFUNC</button>
        {this.props.children}
        <button>{days}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessories: state.accessories,
});
export default connect(mapStateToProps)(TestComponent);
