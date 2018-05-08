import React from 'react';
import Sidebar from '../navigation/Sidebar';
import Content from './Content';
import './Dashboard.css';
import { Switch, Route } from 'react-router-dom';
import { newsRoute, intlNewsRoute, sourceRoute } from '../../config_keys.js';

const Dashboard = () => {
  // let newsRoute,
  //     sourceRoute,
  //     intlNewsRoute;

  // newsRoute = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=20&category=';
  // intlNewsRoute = 'https://newsapi.org/v2/top-headlines?language=en&sources=';
  // sourceRoute = 'https://newsapi.org/v2/top-headlines?sources=';

  return (
    <Switch>
      <div className="board-layout">
        <Sidebar />
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
    </Switch>
  )
}

export default Dashboard;