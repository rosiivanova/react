import React from 'react';
import {data} from '../data.js';
import HeaderSection from '../FormSections/HeaderSection.js';
import FooterSection from '../FormSections/FooterSection.js';
import ContentSection from '../FormSections/ContentSection.js';


class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        this.values = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submittedData: [],
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        let submittedData = [];
        for(var pair of data.entries()) {
            submittedData.push(<div key={Math.random()}>{pair[0]} - {pair[1]}</div>);
        }

        this.setState({submittedData: submittedData});
    }

    formComponents() {
        let sections = {
            header: [],
            footer: [],
            content: [],
        }
        for (let index = 0; index < data.length; index++) {
            let section = data[index];
            if (section.type === "title") {
                sections.header = <HeaderSection value={section.value}/>;
            }
            else if (section.type === 'button') {
                sections.footer = <FooterSection value={section.value}/>;
            }
            else {
                sections.content.push(<ContentSection key={Math.random()} subtitle={section.value} fields={section.fields}/>)
            }
        }
        return sections;
    }

    render() {
        let formComponents = this.formComponents();
        if (this.state.submittedData.length > 0) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {formComponents.header}
                        {formComponents.content}
                        {formComponents.footer}
                    </form>
                    <div className="result">{this.state.submittedData}</div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {formComponents.header}
                        {formComponents.content}
                        {formComponents.footer}
                    </form>
                </div>
            )
        }
    }
}

export default DonationForm;