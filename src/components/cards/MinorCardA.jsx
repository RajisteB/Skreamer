import React from 'react';
import './Cards.css';

const MinorCardA = (props) => {
  let { data } = props;
  let newsWebsite = data.url.split('/')[2];

  if (data === undefined) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="minor-card-a">
        <div className="title-bar">
          <h6>{data.publishedAt}
          <span>
              <i className="far fa-dot-circle fa-xs" style={{ color: 'limegreen' }}></i>
            </span>
          </h6>
          <h6>{newsWebsite}</h6>
        </div>
        <div className="main-content" id="minor-title">
          <a href={data.url} target="blank">
            <h3 style={{ fontWeight: 700 }}>{data.title}</h3>
          </a>
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

};

export default MinorCardA;