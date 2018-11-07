import React, { Component } from 'react';
import {field_mapping} from "../containers/Form/field_mapping";

class Section extends Component {

  renderFields() {
    const {fields, handleFieldChange} = this.props;

    if (fields === undefined) {
      return false;
    }

    return fields.map(field => {
      const FieldItem = field_mapping[field.type];
      return <FieldItem
        key={field.name}
        handleFieldChange={handleFieldChange}
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
    );
  }
}

export default Section;
