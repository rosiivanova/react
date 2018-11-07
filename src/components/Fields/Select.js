import React, { Component } from 'react';
import FieldLabel from "../FieldLabel";

class Select extends Component {

  handleChange(e) {
    console.error(e.target.value);
    this.props.handleFieldChange(e.target.name, e.target.value);
  }

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
    const {type, name, required, title} = this.props;

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
          onChange={(e) => this.handleChange(e)}
        >
          {this.generateOptions()}
        </select>
      </div>
    );
  }
}

export default Select;