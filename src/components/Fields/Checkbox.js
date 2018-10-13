import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"

class Checkbox extends Component {
  render() {
    const {type, name, required, title, handleChange} = this.props;
    return (
      <div className={`field field-type--${type}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={handleChange}
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
