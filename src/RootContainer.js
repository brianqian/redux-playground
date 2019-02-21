import React, { Component } from 'react';
import Counter from './Counter';

class RootContainer extends Component {
  render() {
    React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        test: this.props,
      });
    });
    const children = React.cloneElement(this.props.children, this.props);
    return <div>{children}</div>;
  }
}

export default RootContainer;
