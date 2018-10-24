import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"

class Checkbox extends Component {
  render() {
    const {type, name, required, title, handleChange} = this.props;
    let value = '';
    if (this.props.state !== undefined) {
      value = this.props.state[name];
    }
    return (
      <div className={`field field-type--${type}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={handleChange}
          defaultChecked={value}
        />
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
      </div>
    )
  }
}

export default Checkbox;
