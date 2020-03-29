import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
            <Button className="mt-3" variant="outline-warning" onClick={() => {window.location = "/lobby/"}}>Create private room</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Home;
