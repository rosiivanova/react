import React, {Component} from 'react';
import FieldLabel from "../FieldLabel";

class Textarea extends Component {

  handleChange(e) {
    this.props.handleFieldChange(e.target.name, e.target.value);
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
        <textarea
          id={name}
          name={name}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Textarea;
