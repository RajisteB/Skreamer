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
    this.setState({
      visible: !this.state.visible
    })
  };

  handleResize = () => {
    let w = window.innerWidth;
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
      slide = null;
    } else {
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