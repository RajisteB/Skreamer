import SidebarWeather from './SidebarWeather';
import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';

const Sidebar = () => {
  
    let topics = [
      'Top Stories',
      'U.S.',
      'World',
      'Technology',
      'Business',
      'Politics',
      'Sports',
      'Entertainment',
      'Culture',
    ];

    return (
      <div className="sidebar">
        <div className="logo">
          <h1>S</h1>
        </div>
        <SidebarWeather />
        <div className="menu">
          <ul>
            {topics.map((category, i) => {
              return (
                <Link to={`/${category.toLowerCase()}`} key={i}>
                <li className="link">
                    <i className="fas fa-circle fa-xs" id={`circle${i}`}></i>
                    <h5>{category}</h5>
                </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    )
}

export default Sidebar;