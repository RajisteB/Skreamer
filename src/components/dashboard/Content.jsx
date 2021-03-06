import React, { Component } from 'react';
import './Dashboard.css';
import MajorCard from '../cards/MajorCard';
import MinorCardA from '../cards/MinorCardA';
import MinorCardB from '../cards/MinorCardB';
import axios from 'axios';
import moment from 'moment';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: [],
      apiDataLoaded: false
    }
  }

  getArticles = (route) => {
    const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;
    let news_main_col,
        news_min_col_01,
        news_min_col_02;

    axios.get(`${route}${NEWS_KEY}`)
    .then(res => {
      console.log(res);
      let articles = res.data.articles;

      articles.map(function(article) {
        let time = article.publishedAt.split('T')[1].split('Z')[0].split(':');
        let publish = moment( time, "HH:mm:ss ").toNow();

        publish.indexOf('in') > -1 && publish.indexOf('ago') < 0 ? 
        article.publishedAt = publish.split(' ').slice(1, publish.length - 1).join(' ') + " ago"
        : article.publishedAt = publish;

      })

      // news_main_col = articles.slice(0, 7);
      // news_min_col_01 = articles.slice(7, 14);
      // news_min_col_02 = articles.slice(14, articles.length);

      this.setState({
        main: articles,
        apiDataLoaded: true
      })
    })
  }

  componentDidMount() {
    this.getArticles(this.props.apiRoute);
  }

  render() {
    let { main, col1, col2, apiDataLoaded } = this.state;
    return (
      <div className="content-container">
        <div className="content-header">
          <h5>{this.props.title.toUpperCase()}</h5>
        </div>
        <div className="content">
          <div className="section-01">
            {
              apiDataLoaded ? 
                main.map((article, i) => {
                  return <MajorCard data={article} key={i}/> 
                })
              : <div>Loading...</div>
            }
          </div>
          {/* <div className="section-02">
            {
              apiDataLoaded ?
                col1.map((article, i) => {
                  return <MinorCardA data={article} key={i}/>
                })
              : <div>Loading...</div>
            }
          </div>
          <div className="section-03">
            {
              apiDataLoaded ?
                col2.map((article, i) => {
                  return <MinorCardB data={article} key={i} />
                })
                : <div>Loading...</div>
            }
          </div> */}
        </div>
      </div>
    )
  }
}

export default Content;