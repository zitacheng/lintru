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

  settings() {
    return (
      <Col sm={5}>
        <label>Rounds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={4} className="mb-2">
          <Dropdown.Item onClick={() => {console.log("chose")}}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>6</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>7</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>8</Dropdown.Item>
        </DropdownButton>
        <label>Time to think in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={30} className="mb-2">
          <Dropdown.Item onClick={() => {console.log("chose")}}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>90</Dropdown.Item>
        </DropdownButton>
        <label>Time to vote in seconds</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={30} className="mb-2">
          <Dropdown.Item onClick={() => {console.log("chose")}}>40</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>60</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>70</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>80</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>90</Dropdown.Item>
        </DropdownButton>
        <label>Language</label>
        <DropdownButton variant="info" id="dropdown-item-button" title={"French"} className="mb-2">
          <Dropdown.Item onClick={() => {console.log("chose")}}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => {console.log("chose")}}>French</Dropdown.Item>
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
                  <Col className="mx-auto" sm={4}>
                    <img alt="avatar" className="avatar" src={emotion} />
                    <p className="text-center">Zita</p>
                  </Col>
                  <Col className="mx-auto" sm={4}>
                    <img alt="avatar" className="avatar" src={tired} />
                    <p className="text-center">Titi</p>
                  </Col>
                  <Col className="mx-auto" sm={4}>
                    <img alt="avatar" className="avatar" src={sick} />
                    <p className="text-center">Mel</p>
                  </Col>
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
