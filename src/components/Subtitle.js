import React, { Component } from 'react';
import {field_mapping} from "../containers/field_mapping"

class Subtitle extends Component {

  renderFields() {
    const {fields, handleChange} = this.props
    if (typeof fields === 'undefined') {
      return false;
    }
    return fields.map(field => {
      const FieldItem = field_mapping[field.type];
      return <FieldItem
        key={field.name}
        handleChange={handleChange}
        state={this.props.state}
        {...field}
      />
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.subtitle}</h2>
        {this.renderFields()}
      </div>
    )
  }
}

export default Subtitle;
