import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home'
import Lobby from './component/Lobby';
import Game from './component/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lobby/:key" component={Lobby} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


//
// <Route exact path="/lobby/:lobbyid" component={RequireAuth(Lobby)} />
// <Route exact path="/lobbies" component={RequireAuth(LobbiesList)} />
// <Route exact path="/createlobby" component={RequireAuth(CreateLobby)} />
// <Route exact path="/game/:gameid" component={RequireAuth(Game)} />
