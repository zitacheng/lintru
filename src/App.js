import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home'
import Lobby from './component/Lobby';
import Game from './component/Game';
import './App.css';
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} /> //TODO maybe to an Home/:key link to send to other player
          <Route exact path="/:key" component={Home} /> //TODO maybe to an Home/:key link to send to other player / how to set params or props
          <Route exact path="/lobby/:key" component={Lobby} /> // TODO show home page as well but depends on the url id existence it will either join a lobby or create a new lobby
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
