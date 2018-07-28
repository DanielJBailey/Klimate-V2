import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      input: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }


  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
