import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {handleSubmit, children} = this.props;

    return (
      <button onClick={handleSubmit}>{children}</button>
    )
  }
}

export default Button;
