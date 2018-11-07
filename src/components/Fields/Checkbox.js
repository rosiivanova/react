import React, {Component} from 'react';
import FieldLabel from "../FieldLabel";

class Checkbox extends Component {

  handleChange(e) {
    this.props.handleFieldChange(e.target.name, e.target.checked);
  }

  render() {
    const {type, name, required, title} = this.props;

    return (
      <div className={`field field-type--${type}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={e => this.handleChange(e)}
        />
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
      </div>
    );
  }
}

export default Checkbox;