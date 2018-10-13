import React, { Component } from 'react';
import FieldLabel from "../FieldLabel"

class Select extends Component {
  generateOptions() {
    const {options, name} = this.props;
    if (!options) {
      return false;
    }
    return options.map(option => {
      return <option
        key={`${name}-${option.value}`}
        value={option.value}
      >
        {option.label}
      </option>
    });
  }

  render() {
    const {type, name, required, title, handleChange} = this.props;
    return (
      <div className={`field field-type--${type}`}>
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
        <select
          id={name}
          name={name}
          onChange={handleChange}
        >
          {this.generateOptions()}
        </select>
      </div>
    )
  }
}

export default Select;
