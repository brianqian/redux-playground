import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestContainer extends Component {
  handleClick = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>TEST CONTAINER BUTTON</button>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessories: state.accessories,
});
export default TestContainer;
