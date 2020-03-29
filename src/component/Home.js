import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {

  render() {
    return (
      <Container className="mt-4">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header className="font-weight-bold">LINTRU</Card.Header>
          <Card.Body>
            <Card.Title>Choose a name</Card.Title>
            <form>
              <input type="text" name="name" />
            </form>
            <Col className="w-50 mx-auto mt-4 mb-4">
              <Carousel className="w-25 mx-auto" interval={1000000} indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../assets/dead.png")}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../assets/laugh.png")}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../assets/tired.png")}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Button className="mt-3" variant="outline-warning" onClick={() => {window.location = "/lobby/"}}>Create private room</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Home;
