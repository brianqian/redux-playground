import React, { Component } from 'react';

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

export default TestContainer;
