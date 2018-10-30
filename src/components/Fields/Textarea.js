import React, {Component} from 'react';
import FieldLabel from "../FieldLabel"
import { connect } from 'react-redux';
import { fieldValueChange } from "../../containers/Form/actions";

class Textarea extends Component {

  handleChange(e) {
    this.props.dispatch(fieldValueChange(e));
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
        <textarea
          id={name}
          name={name}
          onChange={e => this.handleChange(e)}
          defaultValue={value}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {fields: state.FormReducer}
};

export default connect(mapStateToProps)(Textarea);
