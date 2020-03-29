import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import emotion from "../assets/emotion.png"
import tired from "../assets/tired.png"
import sick from "../assets/sick.png"

class Lobby extends Component {

   copiedMsg() {
     const popover = (
      <Popover>
        <Popover.Content>
          Copied!
        </Popover.Content>
      </Popover>
    );

    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="w-50 mx-auto mb-4" variant="outline-light">
          https://lintru.io/?8ssG6wnGKx9Q
        </Button>
      </OverlayTrigger>
    );
  }


  render() {

    return (
      <Container className="mt-4">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header className="font-weight-bold">LINTRU</Card.Header>
          <Card.Body>
            <Card.Title>Players</Card.Title>
            <Row className="mb-4 mt-4">
              <Col>
                <img alt="avatar" className="avatar" src={emotion} />
                <p className="text-center">Zita</p>
              </Col>
              <Col>
                <img alt="avatar" className="avatar" src={tired} />
                <p className="text-center">Titi</p>
              </Col>
              <Col>
                <img alt="avatar" className="avatar" src={sick} />
                <p className="text-center">Mel</p>
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
