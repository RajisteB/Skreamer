import React, { Component } from 'react';
import Sidebar from '../navigation/Sidebar';
import Content from './Content';
import './Dashboard.css';
import { Switch, Route } from 'react-router-dom';
const newsRoute = process.env.REACT_APP_NEWS_ROUTE;
const intlNewsRoute = process.env.REACT_APP_INTL_NEWS_ROUTE;
const sourceRoute = process.env.REACT_APP_SOURCE_ROUTE;

class Dashboard extends Component {
  constructor() {
    super();
    this.state ={
      width: window.innerWidth
    }
  }

  handleWidth = () => {
    let w = window.innerWidth;
    this.setState({
      width: w
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWidth);
  }

  render() {
    let sidebar, { width } = this.state;

    if (width < 801 ) {
      sidebar = null;
    } else {
      sidebar = <Sidebar /> 
    }

    return (
      <div className="board-layout">
        {sidebar}
        <Route path="/sports" render={() => <Content
          apiRoute={`${sourceRoute}espn,nhl-news,nfl-news,bleacher-report,talksport`}
          title={'Sports'}
        />}
        />
        <Route path="/culture" render={() => <Content
          apiRoute={`${sourceRoute}vice-news,new-york-magazine,mashable,mtv-news`}
          title={'Culture'}
        />}
        />
        <Route path="/u.s." render={() => <Content
          apiRoute={`${sourceRoute}cnn,the-washington-post,the-new-york-times,usa-today,the-huffington-post,fox-news`}
          title={'U.S. News'}
        />}
        />
        <Route path="/world" render={() => <Content
          apiRoute={`${intlNewsRoute}bbc-news,al-jazeera-english,the-globe-and-mail,cbc-news,google-news-au`}
          title={'World News'}
        />}
        />
        <Route path="/business" render={() => <Content
          apiRoute={`${sourceRoute}bloomberg,financial-times,cnbc,the-wall-street-journal,the-economist`}
          title={'Business'}
        />}
        />
        <Route path="/politics" render={() => <Content
          apiRoute={`${sourceRoute}politico,the-hill,national-review,the-american-conservative,msnbc`}
          title={'Politics'}
        />}
        />
        <Route path="/technology" render={() => <Content
          apiRoute={`${sourceRoute}wired,techcrunch,recode,ars-technica`}
          title={'Technology'}
        />}
        />
        <Route path="/entertainment" render={() => <Content
          apiRoute={`${newsRoute}entertainment`}
          title={'Entertainment'}
        />}
        />
        <Route path="/top stories" render={() => <Content
          apiRoute={`${newsRoute}general`}
          title={'Top  Stories'}
        />}
        />
        <Route exact path="/" render={() => <Content
          apiRoute={`${newsRoute}general`}
          title={'Top Stories'}
        />}
        />
      </div>
    )
  }
}

export default Dashboard;