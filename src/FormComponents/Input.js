import React from 'react';

class Input extends React.Component {
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