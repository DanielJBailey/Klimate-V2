import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowed: true, // if user allows location services
      input: '', //input from zip code input
      latitude: null, //latitude of user
      longitude: null //longitude of user
    }
    this.handleChange = this.handleChange.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.userDenied = this.userDenied.bind(this);
  }

  //functin to handle input from zip code form (to come)
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  //function to get current location from HTML5 Geolocation if user allows
  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation, this.userDenied);
    }
  }

  //function to handle error callback

  userDenied(err) {
    this.setState({
      allowed: false
    });
    let results = document.querySelector('.results');
    results.innerHTML = "User is lame!";
  }

  //set location state from user location
  setLocation(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    console.log('Allowed!');
  }

  

  render() {

    function SearchBox(props) {
      const allowed = props.allowed;
      if(!allowed) {
        return (
          <div>
            Hello
          </div>
        );
      } else {
        return null;
      }
    }

    return (
      <div className="App">
      <button onClick={this.getPosition}>Get Location</button>
      
      <SearchBox allowed = {this.state.allowed}/>
      <div className="results">
        <h4>{this.state.longitude}</h4>  
        <h4>{this.state.longitude}</h4>    
      </div>
      </div>
    );
  }
}

export default App;
