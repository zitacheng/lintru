import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Home extends Component {

  render() {
    return (
      <Container className="mt-4">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header>Lintru</Card.Header>
          <Card.Body>
            <Card.Title>Choisissez un nom</Card.Title>
              <form>
                <input type="text" name="name" />
              </form>
            <Button className="mt-3" variant="outline-warning">créer une salle privée</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container>
    );
  }
};

export default Home;
