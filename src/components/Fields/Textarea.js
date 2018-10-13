import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"

class Textarea extends Component {
  render() {
    const {type, name, required, title, handleChange} = this.props;
    return (
      <div className={`field field-type--${type}`}>
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
        <textarea
          id={name}
          name={name}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Textarea;
