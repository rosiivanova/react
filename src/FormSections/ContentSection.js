import React from 'react';
import Select from '../FormComponents/Select.js'
import Input from '../FormComponents/Input.js'

class ContentSection extends React.Component {
    
    renderFields() {
        let fields = this.props.fields;
        let fieldComponents = [];

        for (let index = 0; index < fields.length; index++) {
            let field = fields[index];

            switch(field.type) {
                case 'select': 
                    fieldComponents.push(<Select key={Math.random()} name={field.name} required={field.required} title={field.title} options={field.options} />);
                break;
                case 'text': 
                case 'email': 
                case 'number': 
                    fieldComponents.push(<Input key={Math.random()} type={field.type} name={field.name} required={field.required} title={field.title}/>)
                break;
                default:
                break;
            }
        }
        return fieldComponents;
    }

    render() {
        return <div>
            {this.props.subtitle}
            {this.renderFields()}
        </div>
    }
}

export default ContentSection;