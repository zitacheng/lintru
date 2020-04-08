import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import emotion from "../assets/emotion.png"
import admin from "../assets/admin.gif"
import tired from "../assets/tired.png"
import sick from "../assets/sick.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import history from './../history';

class Lobby extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: props.location.state.game.key,
      game: props.location.state.game,
      players: props.location.state.game.players,
      client:  props.location.state.player
    }
  }

  componentDidMount() {
    global.socket.on("join/" + this.state.key, (data) => {
        console.log("New join data 1 = ", data);
        this.setState({players: data.lobby.players});
    });

    global.socket.on('startGameSuccess/' + this.state.key, (data) => {
      console.log("onstartgamesuccess data = ", data);
      var res = data.game.players.find(player => player.id === this.state.client.id);
      history.push({pathname: '/game/' +  data.game.key, state: {game: data.game, client: res}});
    });
  }

   copiedMsg() {
     const popover = (
      <Popover>
        <Popover.Content>
          Copied!
        </Popover.Content>
      </Popover>
    );

    return (
      <CopyToClipboard text={"https://lintru.io/?8ssG6wnGKx9Q"}>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="w-50 mx-auto mb-4" variant="outline-light">
              https://lintru.io/?8ssG6wnGKx9Q
            </Button>
        </OverlayTrigger>
      </CopyToClipboard>
    );
  }

  settings() {
    return (
      <Col sm={5}>
        <label>Rounds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.game.round} className="mb-2" disabled={this.state.client.admin ? false : true}>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 3}}) }}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 4}}) }}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 5}}) }}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 6}}) }}>6</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 7}}) }}>7</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({game: {...this.state.game, round: 8}}) }}>8</Dropdown.Item>
        </DropdownButton>
        <label>Time to think in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.game.timeThink} className="mb-2" disabled={this.state.client.admin ? false : true}>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 40}}) }}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 50}}) }}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 60}}) }}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 70}}) }}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 80}}) }}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeThink: 90}}) }}>90</Dropdown.Item>
        </DropdownButton>
        <label>Time to vote in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.game.timeVote} className="mb-2" disabled={this.state.client.admin ? false : true}>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 40}}) }}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 50}}) }}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 60}}) }}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 70}}) }}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 80}}) }}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, timeVote: 90}}) }}>90</Dropdown.Item>
        </DropdownButton>
        <label>Language</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.game.lang} className="mb-2" disabled={this.state.client.admin ? false : true}>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, lang: "English"}}) }}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => {this.setState({game: {...this.state.game, lang: "Francais"}}) }}>French</Dropdown.Item>
        </DropdownButton>
      </Col>
    );
  }

  startGame() {

    console.log("game = ", this.state.game);
    global.socket.emit('startGame', this.state.game, this.state.players);
  }

  render() {

    return (
      <Container className="mt-4">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header className="font-weight-bold">LINTRU</Card.Header>
          <Card.Body>
            <Card.Title>Lobby</Card.Title>
            <Row className="mb-4 mt-4">
              {this.settings()}
              <Col sm={7}>
                <Row >
                  {this.state.players && this.state.players.map((player, idx) => {
                      if (player.admin) {
                        return (
                          <Col className="mx-auto" sm={4} key={idx}>
                            <img alt="avatar" className="avatar" src={require('../assets/' + player.avatar)} />
                            <img alt="admin" className="crown" src={admin} />
                            <p className="text-center">{player.username}</p>
                          </Col>
                        )
                      }
                      else {
                        return (
                          <Col className="mx-auto" sm={4} key={idx}>
                            <img alt="avatar" className="avatar" src={require('../assets/' + player.avatar)} />
                            <p className="text-center">{player.username}</p>
                          </Col>
                        )
                      }
                    })
                  }
                </Row>
              </Col>
            </Row>
            <Button className="mt-3" variant="outline-warning" disabled={this.state.client.admin ? false : true} onClick={() => {this.startGame()}}>Start</Button>
          </Card.Body>
          {this.copiedMsg()}
        </Card>
      </Container>
    );
  }
};

export default Lobby;
