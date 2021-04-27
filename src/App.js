import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ListSongComponent from "./components/ListSongComponent";
import HeaderComponent from "./components/headerComponent";
import FootComponent from "./components/footComponent";
import CreateSongComponent from "./components/createSongComponent";
import ViewSongComponent from "./components/viewSongComponent";

function App() {
  return (
      <div className="App">
          <Router>
              <HeaderComponent/>
              <div className="container bodyArea">
                <main>
                    <Switch>
                        <Route path="/" exact component={ListSongComponent} />
                        <Route path="/songs" component={ListSongComponent} />
                        <Route path="/add-song/:id" component={CreateSongComponent} />
                        <Route path="/view-songs/:id" component={ViewSongComponent} />
                    </Switch>
                </main>
              </div>
              <FootComponent/>
          </Router>
      </div>
  );
}

export default App;