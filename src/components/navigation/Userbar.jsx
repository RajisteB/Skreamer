import React, { Component } from 'react';
import Clock from '../clock/Clock';
import Slidenavbar from '../navigation/Slidenavbar';
import './Navigation.css';

class Userbar extends Component { 
  constructor() {
    super();
    this.state = {
      visible: false,
      size: window.innerWidth
    }
  }

  handleMenuClick = () => {
    console.log('Clicked - state: ' + this.state.visible)
    this.setState({
      visible: !this.state.visible
    })
  };

  handleResize = () => {
    let w = window.innerWidth;
    console.log(w);
    this.setState({
      size: w
    })
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    let slide, { visible, size } = this.state;

    if (size >= 800) {
      console.log(size);
      console.log('greater than 900px')
      slide = null;
    } else {
      console.log('less than 900px')
      slide = <Slidenavbar onclick={this.handleMenuClick} visible={visible} />;
    }

    return (
      <div className="nav-container">
        <div className="userbar">
          <Clock />
        </div>
        {slide}
      </div>
  
    )
  }
};

export default Userbar;