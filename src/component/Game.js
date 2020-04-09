import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import emotion from "../assets/emotion.png"
import tired from "../assets/tired.png"
import sick from "../assets/sick.png"
import laugh from "../assets/laugh.png"
import writting from "../assets/writting.gif"
import Countdown from 'react-countdown';

class Game extends Component {

  constructor (props) {
    super(props);

    this.state = {
      describe: "",
      vote: false,
      modal: true,
      game: props.location.state.game,
      players: props.location.state.game.players,
      client:  props.location.state.client,
    };
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {

    global.socket.on('accuseThisPersonSuccess/' + this.state.game.key, (data) => {
        console.log(" accuseThisPersonSuccess data = ", data);
    });
    global.socket.on('submitAnswerSuccess/' + this.state.game.key, (data) => {
      console.log(" data = ", data);
      this.state.players = data.players;
      let allDone = true;

      data.players.forEach((player) => {
        console.log("player = ", player)
        if (!player.submited)
          allDone = false;
      });
      if (allDone)
        this.setState({vote: true});
      console.log("all done = ", allDone);
    });
  }

  listPlayers() {
    return (this.state.players.map(player => {
      return(
        <React.Fragment key={player.id}>
          <Col className="mb-4">
            <img alt="avatar" className="avatar" src={require("../assets/" + player.avatar)} />
            <p className="text-center">{player.username}</p>
          </Col>
          <Col className="text-left float-left">
            {this.state.vote ?
              <Alert variant="info" className="describeButton" onClick={() => {
                global.socket.emit('accuseThisPerson', this.state.game, this.state.players, this.state.client, player);
              }}>
                {player.describe}
              </Alert> : <img alt="writting" className="avatar" src={writting} />}
          </Col>
        </React.Fragment>)
      })
    );
  }

  showVote() {
    return (
      <Col sm={3}>
        <Card className="text-center" bg="dark" text="light">
          <Card.Header className="font-weight-bold">Votes</Card.Header>
          <Card.Body className="pr-2">
            <Row className="mb-4 mt-4 pb-4">
              <Col className="text-left">
                <p>1# zita</p>
                <p>2# titi</p>
                <p>3# melissa</p>
                <p>4# Alicia</p>
                <p>5# melissa</p>
                <p>6# melissa</p>
                <p>7# melissa</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  handleChange(event) {
    this.setState({describe: event.target.value});
  }

  showModal() {
    return (
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.modal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Your word is {this.state.client.word}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Decribe your word</p>
          <form>
            <input className="wordInput" type="text" name="describe" value={this.state.describe} onChange={this.handleChange}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => {
              global.socket.emit('submitAnswer', this.state.game, this.state.players, this.state.client, this.state.describe);
              this.setState({modal: false});
            }}>submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    const { client, vote } = this.state;

    return (
      <Container className="mt-4 mx-auto" fluid>
        <Row>
          <Col sm={9}>
            <Card className="text-center" bg="dark" text="light">
              <Card.Header className="font-weight-bold">LINTRU</Card.Header>
              <Card.Body className="pr-2">
                <Card.Title>Your word: {client.word}</Card.Title>
                <Countdown date={Date.now() + 30000} ref={el => this.countdown = el}
                  renderer={({hours, minutes, seconds, completed}) => {
                    return <span>{seconds}</span>;
                  }}
                  onComplete={() => {
                    this.setState({vote: !vote, modal: false});
                    // this.start();
                    console.log("this.countdown = ", this.countdown);
                    // this.countdown.start();
                  }}
                />
                <Row className="mb-4 mt-4 pb-4">
                  {this.listPlayers()}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {this.showVote()}
          {this.showModal()}
        </Row>
      </Container>
    );
  }
};

export default Game;
