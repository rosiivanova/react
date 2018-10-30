import React, { Component } from 'react';
import FieldLabel from "../FieldLabel"
import { connect } from 'react-redux';
import { fieldValueChange } from "../../containers/actions";

class Select extends Component {

  handleChange(e) {
    this.props.dispatch(fieldValueChange(e));
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
    let value = '';
    if (typeof this.props.fields[name] !== 'undefined') {
      value = this.props.fields[name];
    }
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
          value={value}
        >
          {this.generateOptions()}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {fields: state.FormReducer}
};

export default connect(mapStateToProps)(Select);
