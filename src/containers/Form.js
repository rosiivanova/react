import React, {Component} from 'react';
import {form_elements} from '../form_elements'
import Title from "../components/Title";
import Button from "../components/Button"
import Subtitle from "../components/Subtitle"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'results': false,
      'field_first_name': 'Default value brah',
      'field_salutation': 1,
      'field_gift_type[44]': true,
      'field_gift_type[155]': true,
    };
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    this.setState({
      results: true
    });
  }

  displayElements() {
    // Loop through all elements and render their components.
    return form_elements.map(data => {
      switch (data.type) {
        case 'title':
          return <Title key={Math.random()}>{data.value}</Title>
        case 'subtitle':
          return <Subtitle
            handleChange={this.handleChange.bind(this)}
            key={data.value}
            subtitle={data.value}
            fields={data.fields}
            state={this.state}
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
    for (const field_name in this.state) {
      if (this.state.hasOwnProperty(field_name)) {
        const field_value = this.state[field_name];
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
        {this.state.results && this.displayResults() }
      </div>
    );
  }
}

export default Form;
