import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { login } from "../request.js"
import history from './../history';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      key: props.match.params.key,
      idx: 0,
      avatar: ['dead.png', 'laugh.png', 'tired.png']
    }
    console.log("global socket = ", global.socket);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  loginUserCreate() {
    global.socket.emit('addPlayer', this.state.username, this.state.avatar[this.state.idx], this.state.key);
    global.socket.on('addPlayerSuccess', (dataPlayer) => {
      if (dataPlayer.success) {
        global.socket.emit('createLobby', this.state.key);
        global.socket.on('createLobbySuccess', (data) => {
          dataPlayer.response.admin = true;
          if (data.success)
            history.push({pathname: '/lobby/' +  data.response.key, state: {game: data.response, player: dataPlayer.response}});
        });
      }
    });
  }

  loginUserJoin() {

    global.socket.emit('addPlayer', this.state.username, this.state.avatar[this.state.idx], this.state.key);
    global.socket.on('addPlayerSuccess', (dataPlayer) => {
      if (dataPlayer.success) {
        global.socket.emit('joinLobby', this.state.key);
        global.socket.on('joinLobbySuccess', (data) => {
          if (data.success)
            history.push({pathname: '/lobby/' + this.state.key, state: {game: data.response, player: dataPlayer.response}});
        });
      }
    });
  }


  render() {

    return (
      <Container className="mt-4">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header className="font-weight-bold">LINTRU</Card.Header>
          <Card.Body>
            <Card.Title>Choose a name</Card.Title>
            <form>
              <input type="text" name="name" value={this.state.username} onChange={this.handleChange}/>
            </form>
            <Col className="w-50 mx-auto mt-4 mb-4">
              <Carousel className="w-25 mx-auto" indicators={false} activeIndex={this.state.idx}
                onSelect={ (selected, idx) => {
                    this.setState({idx: selected});
                }}>
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
            <Button className="mt-3" variant="outline-warning" onClick={() => {
                if (!this.state.key)
                  this.loginUserCreate();
                else
                  this.loginUserJoin();
              }}>{this.state.key ? "Join private room" : "Create private room"}</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Home;
