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
import tired from "../assets/tired.png"
import sick from "../assets/sick.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Lobby extends Component {

  constructor(props) {
    super(props);

    this.state = {
      round: 4,
      language: "French",
      vote: 30,
      think: 30,
      key: props.match.params.key,
      players: []
    }

    global.socket.emit('getPlayers', this.state.key);
  }

  componentDidMount() {
    global.socket.on('getPlaysersSuccess', (data) => {

      if (data.success)
      {
        console.log("getPlaysersSuccess data =", data);
        this.setState({players: data.players});

      }
      else {
        console.log("show message", data.msg);
      }
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
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.round} className="mb-2">
          <Dropdown.Item onClick={() => { this.setState({round: 3}) }}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({round: 4}) }}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({round: 5}) }}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({round: 6}) }}>6</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({round: 7}) }}>7</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({round: 8}) }}>8</Dropdown.Item>
        </DropdownButton>
        <label>Time to think in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.think} className="mb-2">
          <Dropdown.Item onClick={() => { this.setState({think: 40}) }}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({think: 50}) }}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({think: 60}) }}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({think: 70}) }}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({think: 80}) }}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({think: 90}) }}>90</Dropdown.Item>
        </DropdownButton>
        <label>Time to vote in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.vote} className="mb-2">
          <Dropdown.Item onClick={() => { this.setState({vote: 40}) }}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({vote: 50}) }}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({vote: 60}) }}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({vote: 70}) }}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({vote: 80}) }}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({vote: 90}) }}>90</Dropdown.Item>
        </DropdownButton>
        <label>Language</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.language} className="mb-2">
          <Dropdown.Item onClick={() => { this.setState({language: "English"}) }}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => { this.setState({language: "French"}) }}>French</Dropdown.Item>
        </DropdownButton>
      </Col>
    );
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
                  {this.state.players.map((player, idx) => {
                      return (
                        <Col className="mx-auto" sm={4} key={idx}>
                          <img alt="avatar" className="avatar" src={emotion} />
                          <p className="text-center">{player.name}</p>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Col>
            </Row>
            <Button className="mt-3" variant="outline-warning" onClick={() => {window.location = "/game/"}}>Start</Button>
          </Card.Body>
          {this.copiedMsg()}
        </Card>
      </Container>
    );
  }
};

export default Lobby;
