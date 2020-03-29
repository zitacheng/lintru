import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
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
      word: "banana",
      vote: false,
      players: [{
          name: "zita",
          icon: "tired",
          id: 0,
          word: "jaune"
        },{
          name: "titi",
          icon: "laugh",
          id: 1,
          word: "fruit"
        },{
          name: "alicia",
          icon: "emotion",
          id: 2,
          word: "nourriture"
        },{
          name: "melissa",
          icon: "sick",
          id: 3,
          word: "fruit"
        },{
          name: "titi",
          icon: "laugh",
          id: 1,
          word: "fruit"
        },{
          name: "alicia",
          icon: "emotion",
          id: 2,
          word: "nourriture"
        },{
          name: "melissa",
          icon: "sick",
          id: 3,
          word: "fruit"
        }
      ]
    };

  }

  listPlayers() {
    return (this.state.players.map(player => {
      return(
        <React.Fragment key={player.id}>
          <Col xs={1} className="mb-4">
            <img alt="avatar" className="avatar" src={require("../assets/" + player.icon + ".png")} />
            <p className="text-center">{player.name}</p>
          </Col>
          <Col xs={3} className="text-left float-left">
            {this.state.vote ?
              <Alert variant="info">
                {player.word}
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


  render() {
    const { word, vote } = this.state;

    return (
      <Container className="mt-4 mx-auto" fluid>
        <Row>
          <Col sm={9}>
            <Card className="text-center" bg="dark" text="light">
              <Card.Header className="font-weight-bold">LINTRU</Card.Header>
              <Card.Body className="pr-2">
                <Card.Title>Your word: {word}</Card.Title>
                <Countdown date={Date.now() + 30000} ref={el => this.countdown = el}
                  renderer={({hours, minutes, seconds, completed}) => {
                    return <span>{seconds}</span>;
                  }}
                  onComplete={(test) => {
                    this.setState({vote: !vote});
                    // this.start();
                    console.log("this.countdown = ", this.countdown);
                    this.countdown.start();
                  }}
                />
                <Row className="mb-4 mt-4 pb-4">
                  {this.listPlayers()}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {this.showVote()}
        </Row>
      </Container>
    );
  }
};

export default Game;
