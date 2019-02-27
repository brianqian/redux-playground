import React, { Component } from 'react';

class TestContainer extends Component {
  state = {
    input: '',
  };
  handleClick = () => {
    console.log(this.props);
  };

  onChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    console.log('rerendering container');
    return (
      <div>
        container input <input onChange={this.onChange} value={this.state.input} />
        <button onClick={this.handleClick}>TEST CONTAINER BUTTON</button>
        {this.props.children}
      </div>
    );
  }
}

export default TestContainer;
