import React, { Component } from 'react';

class FieldLabel extends Component {
  render() {

    if (!this.props.title) {
      return false;
    }

    let classes = [];
    if (this.props.required) {
      classes.push('required');
    }
    return (
      <label htmlFor={this.props.for} className={classes.join(' ')}>
        {this.props.title}
      </label>
    )
  }
}

export default FieldLabel;
