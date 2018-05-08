import React from 'react';
import './Cards.css';

const MinorCardB = (props) => {
  let { data } = props;
  if ( data === undefined ) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="minor-card-b">
        <h6>{data.publishedAt}
          <span style={{ paddingLeft: '6px'}}>
            <i className="far fa-dot-circle fa-xs" style={{ color: 'limegreen' }}></i>
          </span>
        </h6>
        <a href={data.url} target="blank">
          <h5>{data.title}</h5>
        </a>
      </div>
    )
  }
  
};

export default MinorCardB;
