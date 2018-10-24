import React, { Component } from 'react';
import FieldLabel from "../FieldLabel"

class Email extends Component {
  render() {
    const {type, name, required, title, handleChange} = this.props;
    let value = '';
    if (this.props.state !== undefined) {
      value = this.props.state[name];
    }
    return (
      <div className={`field field-type--${type}`}>
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
        <input
          type="email"
          id={name}
          name={name}
          onChange={handleChange}
          defaultValue={value}
        />
      </div>
    )
  }
}

export default Email;
