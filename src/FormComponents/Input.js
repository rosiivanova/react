import React from 'react';

class Input extends React.Component {

    renderOptions() {
        let options = [];
        for (let index = 0; index < this.props.options.length; index++) {
            let option = this.props.options[index];
            options.push(<option key={Math.random()}value={option.value}>{option.label}</option>)
        }

        return options;
    }
    render () {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                <input id={this.props.name} type={this.props.type} name={this.props.name} required={this.props.required}></input>
            </div>
        )
    }
}

export default Input;