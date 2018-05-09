import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

const Slidenavbar = (props) => {
  let styles, visible;

  if (props) {
    if (props.visible) {
      styles = { height: '96vh' };
      visible = 'show';
    } else {
      styles = { height: '7.5vh' };
      visible = 'hide';
    }
  let topics = [
        'Top Stories',
        'U.S.',
        'World',
        'Technology',
        'Business',
        'Politics',
        'Sports',
        'Entertainment',
        'Culture' 
    ];
  
    return (
      <div className="slide-nav" style={styles}>
        <div className="button-container">
          <button className="side-btn" onClick={props.onclick}>
            <i className="fa fa-bars fa-3x"></i>
          </button>
          <h3>Skreamer</h3>
        </div>
        <div className="break"></div>
        <br />
        <div className={`site-links ${visible}`}>
          <ul className="slidenav-menu">
            {topics.map((topic, i) => {
              return (
                <Link to={`/${topic.toLowerCase()}`} 
                onClick={props.onclick}
                className="slide-menu-link" 
                key={i}>
                  <li className="slidenav-li">{topic}</li>
                </Link>
              )
            })}
          </ul>
          <br/>
          <div className="social-media">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-twitter-square fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
          </div>  
        </div>
      </div>
    )
  }
};

export default Slidenavbar;