import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"

class Text extends Component {
  render() {
    const {type, name, required, title, handleChange} = this.props;
    return (
      <div className={`field field-type--${type}`}>
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Text;
