import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"
import connect from "react-redux/es/connect/connect"
import {checkboxValueChange} from "../../containers/Form/actions"

class Checkbox extends Component {
  handleChange(e) {
    this.props.dispatch(checkboxValueChange(e));
  }

  render() {
    const {type, name, required, title} = this.props;
    let value = '';
    if (typeof this.props.fields[name] !== 'undefined') {
      value = this.props.fields[name];
    }
    return (
      <div className={`field field-type--${type}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={e => this.handleChange(e)}
          checked={value}
        />
        <FieldLabel
          for={name}
          required={required}
          title={title}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {fields: state.FormReducer}
};

export default connect(mapStateToProps)(Checkbox);
