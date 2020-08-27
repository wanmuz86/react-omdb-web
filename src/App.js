import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
       <Switch>
       <Route path="/detail/:imdbId">
         <Detail />
       </Route>
       <Route path="/">
         <Main />
       </Route>
     </Switch>
     <Footer/>
     </div>
     </Router>
  );
}

export default App;
