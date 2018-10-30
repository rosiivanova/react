import React, {Component} from 'react';
import FieldLabel from "../FieldLabel";
import { connect } from 'react-redux';
import { fieldValueChange } from "../../containers/actions";

class Text extends Component {
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
        <input
          type={type}
          id={name}
          name={name}
          onChange={(e) => this.handleChange(e)}
          value={value}
          key={name}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {fields: state.FormReducer}
};

export default connect(mapStateToProps)(Text);
