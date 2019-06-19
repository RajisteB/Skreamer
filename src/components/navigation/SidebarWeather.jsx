import axios from 'axios';
import React, { Component } from 'react';
import Fog from './icons/003-cloud.png';
import Snow from './icons/005-nature.png';
import Rain from './icons/006-rain.png';
import Summer from './icons/004-summer.png';
import Thunder from './icons/002-night.png';
import Cloud_Sun from './icons/001-sun.png';
import './Navigation.css';

class SidebarWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      weatherType: '',
      id: ''
    }
  }
  
  getTemperature = () => {
    const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;
    const WEATHER_ROUTE = process.env.REACT_APP_WEATHER_ROUTE;
    axios.get(`${WEATHER_ROUTE}zip=10010,us&units=imperial&apiKey=${WEATHER_KEY}`)
    .then (res => {
      console.log(res.data);
      this.setState({
        temp: Math.floor(Math.round(res.data.main.temp)),
        weatherType: res.data.weather[0].description,
        id: res.data.weather[0].id,
      })
    })
  }
  
  componentDidMount() {
    this.getTemperature();
  }

  render() {
    let { temp, weatherType, id } = this.state;
    let source = null;

    id < 300 ? source = Thunder : 
    id < 600 && id >= 300 ? source = Rain :
    id >= 600 && id <= 700 ? source = Snow :
    id >= 701 && id < 800 ? source = Fog :
    id === 800 ? source = Summer :
    source = Cloud_Sun

    return (
      <div className="weather">
        <img src={source} alt=""/>
        <h4>{temp}&deg; F {weatherType}</h4>
      </div>
    )
  }
}


export default SidebarWeather;