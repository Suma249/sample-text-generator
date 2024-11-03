import axios from 'axios';
import './App.css';
import React, { Component } from 'react'
import Output from './components/Output';

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
    axios.get('http://localhost:5000/api/text?n=' + this.state.paras + '&t=p')
      .then(async (response) => {
        const data = response.data;
        console.log("response received: " + response)
        if (Array.isArray(data) && data.length > 0) {
          this.setState({ text: data.join('\n\n') })
        } else {
          this.setState({ text: "no text generated" })
        }
        this.setState({ text: response.data }, function () {
          console.log("logged once the setstate has updated the text state once the get call is completed: " + this.state);
        })
      })
      .catch(err => {
        console.log("error occurred..: " + err);
      })
  }
  componentDidMount() {
    this.getSampleText();
  }
  render() {
    return (
      <div className="App">
        hello
        <br />
        <Output value={this.state.text} />
      </div>
    )
  }
}

