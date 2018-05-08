import React from 'react';
import './Cards.css';

const MajorCard = (props) => {
  let { data } = props;
  if (data === undefined) {
    return (
      <div className="major-card">
        Loading...
      </div>
    )
  } else {
    let newsWebsite;
    data.author === null ? data.author = 'N/A' : data.author;

    newsWebsite = data.url.split('/')[2];

    return (
      <div className="major-card">
        <div className="title-bar">
          <h6>{data.publishedAt}
            <span>
              <i className="far fa-dot-circle fa-xs" style={{ color: 'limegreen' }}></i>
            </span>
          </h6>
          <h6>{newsWebsite}</h6>
        </div>
        <div className="main-content">
          <a href={data.url} target="blank">
            <h1>{data.title}</h1>
          </a>
          <h3>{data.description}</h3>
        </div>
        <div className="contributor">
          <div className="author">
            <i className="fas fa-pencil-alt"></i>
            <h6>{data.source.name}</h6>
          </div>
        </div>
      </div>
    )
  }
  
}

export default MajorCard;