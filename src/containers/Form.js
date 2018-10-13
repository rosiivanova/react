import React, {Component} from 'react';
import {form_elements} from '../form_elements'
import Title from "../components/Title";
import Button from "../components/Button"
import Subtitle from "../components/Subtitle"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.vremenno = {};
  }

  handleChange(event) {
    const {name, value} = event.target;
    // Shano mano tricks brah.
    this.vremenno[name] = value;
  }

  handleSubmit() {
    let results = [];
    console.log(this.vremenno)
    for (const field_name in this.vremenno) {
      if (this.vremenno.hasOwnProperty(field_name)) {
        const field_value = this.vremenno[field_name];
        results.push((
          <div className="result" key={`result-${field_name}`}>
            <span className="name">{field_name}</span>
            <span className="value">{field_value}</span>
          </div>
        ));
      }
    }
    this.vremenno = {};
    this.setState({results});
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
            key={Math.random()}
            subtitle={data.value}
            fields={data.fields}
          />
        case 'button':
          return <Button key={Math.random()} handleSubmit={this.handleSubmit.bind(this)}>{data.value}</Button>
        default:
          return false;
      }
    })
  }

  render() {
    return (
      <div className="form">
        {this.displayElements()}
        {this.state.results}
      </div>
    );
  }
}

export default Form;
