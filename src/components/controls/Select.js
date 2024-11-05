import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }
    onChange(event) {
        this.setState({ value: event.target.value }, function () {
            this.props.onChange(this.state.value)
        })
    }
    render() {
        return (
            <div>
                <select className='form-control' onChange={this.onChange.bind(this)}>
                    <option value='p'>Paragraph</option>
                    <option value='s'>Sentence</option>
                    <option value='w'>Word</option>
                </select>
            </div>
        )
    }
}
