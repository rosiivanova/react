import React, {Component} from 'react';
import {form_elements} from '../../form_elements'
import Title from "../../components/Title";
import Button from "../../components/Button"
import Section from "../../components/Section"
import { connect } from 'react-redux';
import { submitForm, fieldValueChange } from "./actions";

class Index extends Component {

  handleSubmit() {
    this.props.dispatch(submitForm());
  }

  handleFieldChange(fieldName, value) {
    this.props.dispatch(fieldValueChange(fieldName, value));
  }

  displayElements() {
    // Loop through all elements and render their components.
    return form_elements.map(data => {
      switch (data.type) {
        case 'title':
          return <Title key={Math.random()}>{data.value}</Title>
        case 'subtitle':
          return <Section
            key={data.value}
            subtitle={data.value}
            fields={data.fields}
            handleFieldChange={this.handleFieldChange.bind(this)}
          />
        case 'button':
          return <Button key={Math.random()} handleSubmit={this.handleSubmit.bind(this)}>{data.value}</Button>
        default:
          return false;
      }
    })
  }

  displayResults() {
    let results = [];
    for (const field_name in this.props.results) {
      if (this.props.results.hasOwnProperty(field_name)) {
        const field_value = this.props.results[field_name];
        results.push((
          <div className="result" key={`result-${field_name}`}>
            <span className="name">{field_name}</span>
            <span className="value">{field_value}</span>
          </div>
        ));
      }
    }
    return results;
  }

  render() {
    return (
      <div className="form">
        {this.displayElements()}
        {this.props.results.results && this.displayResults() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.FormReducer
});


export default connect(mapStateToProps)(Index);
