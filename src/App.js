import axios from 'axios';
import './App.css';
import React, { Component } from 'react'
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      type: 'p',
      text: ''
    }
  }
  getSampleText() {
    console.log("change in state properties, hence making a call to api to bring text")
    axios.get('https://loremipsum.io/generator?n=' + this.state.paras + '&t=p')
      .then(response => {
        this.setState({ text: response.data.text }, function () {
          console.log(this.state.text)
        })
      })
      .catch(err => {
        console.log("error occurred..: " + err);
      })
  }
  componentDidMount() {
    this.getSampleText();
  }

  handleType(x) {
    this.setState({ type: x }, this.getSampleText)
  }
  handleParas(x) {
    this.setState({ type: x }, this.getSampleText)
  }
  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>ReactJS Sample Text Generator</h1>
        <hr />
        <hr />
        <form className='form-inline'>
          <div className='form-group'>
            <Select value={this.state.type} onChange={this.handleType.bind(this)} />
          </div>
          <div className='form-group'>
            <Text value={this.state.paras} onChange={this.handleParas.bind(this)} />
          </div>
        </form>
        <br /><br />
        <Output value={this.state.text} />
      </div>
    )
  }
}

