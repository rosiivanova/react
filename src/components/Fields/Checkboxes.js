import React, { Component } from 'react';
import Checkbox from "./Checkbox"

class Checkboxes extends Component {

  renderCheckboxes() {
    const {options, name, required} = this.props;

    if (!options) {
      return false;
    }
    return options.map(option => {
      return <Checkbox
        name={`${name}[${option.value}]`}
        key={`${name}[${option.value}]`}
        required={required}
        title={option.label}
        type="checkbox"
        state={this.props.state}
      />
    });
  }

  render() {
    const {type} = this.props;
    return (
      <div className={`field field-type--${type}`}>
        {this.renderCheckboxes()}
      </div>
    )
  }
}

export default Checkboxes;
