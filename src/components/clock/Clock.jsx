import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  tick = () => {
    this.setState({ date: new Date() });
  }
  
  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render () {
    let week = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let month =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let { date } = this.state;
    let dayOfWeek = week[new Date().getDay() - 1];
    let currentDay = new Date().getDate();
    let currentYear =  new Date().getFullYear();
    let currentMonth = month[new Date().getMonth()];

    return (
      <div className="clock">
        <div className="pulse"></div>
        <h5>{date.toLocaleTimeString()} {dayOfWeek} {currentMonth} {currentDay}, {currentYear} </h5>
      </div>
    )
  }

};
export default Clock;