import React from 'react';

class FooterSection extends React.Component {
    render () {
        return <button>{this.props.value}</button>;
    }
}

export default FooterSection;