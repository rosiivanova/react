import React from 'react';

class Select extends React.Component {

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
                <select id={this.props.name} type="select" name={this.props.name} required={this.props.required}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

export default Select;