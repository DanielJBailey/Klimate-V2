import React, { Component } from 'react';
import './Styles/App.css';

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
    this.getWeather = this.getWeather.bind(this);
  }

  componentWillMount() {
    this.getPosition();
  }

  //functin to handle input from zip code form (to come)
  handleChange(event) {
    this.setState({
      input: event.target.value
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
  }

  //set location state from user location
  setLocation(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    //if lat & long is found, get current weather
    if(this.state.longitude !== null || this.state.latitude !== null){
      this.getWeather(this.state.latitude, this.state.longitude);
    }   
  }

  //function to get weather from API
  getWeather(lat, long) {
    let api = 'http://api.openweathermap.org/data/2.5/weather?';
    let key = '38f67fb8c90f3e0155a438937a83b123';

    fetch(api + 'lat=' + lat + '&lon=' + long + '&APPID=' + key)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data.weather[0].main);
    });
  }


  //http://api.openweathermap.org/data/2.5/weather?lat=33.5135909&lon=-86.7791919&APPID=38f67fb8c90f3e0155a438937a83b123
  

  render() {
    // Search function for later use
    // function SearchBox(props) {
    //   const allowed = props.allowed;
    //   if(!allowed) {
    //     return (
    //       <div>
            
    //       </div>
    //     );
    //   } else {
    //     return null;
    //   }
    // }

    return (
      <div className="App">
        <div className="results">
          <h4>{this.state.latitude}</h4>  
          <h4>{this.state.longitude}</h4>    
        </div>
      </div>
    );
  }
}

export default App;
