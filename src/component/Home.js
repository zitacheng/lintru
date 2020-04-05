import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { login } from "../request.js"

class Home extends Component {

  constructor(props) {
    super(props);

    console.log("props = ", props)
    console.log("props key = ", props.match.params.key) //TODO if undefined admin true else if (key exist on database ) admin false  else false
    this.state = {
      username: '',
      key: props.match.params.key
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  // async loginUser() {
  //   // const { cookies } = this.props;
  //
  //   try {
  //     var res = await login(this.state.username, "dead.png", true);
  //     console.log("HALLO", res);
  //
  //     if (res == "KO")
  //     {
  //       // this.setState({notification: true, notificationText: res.error, color: 'warning', loading: false});
  //       console.log("ERROR");
  //     }
  //     else
  //     {
  //       // cookies.set('firstname',res.firstname);
  //       // cookies.set('active', true);
  //       console.log("successful");
  //       window.location = "/lobby/" + res.msg;
  //
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  loginUserCreate() {
    // console.log("global socket = ", global.socket);

    //TODO display error if name empty
    //TODO check name length
    // global.socket.emit('addPlayer', this.state.username, "dead.png", this.state.key);
    // global.socket.on('addPlayerSuccess', (data) => {
    //   if (data.success)
    //   {
    //     if (!this.state.key)
    //       window.location = "/lobby/" + data.player.lobbyKey;
    //     else
    //       window.location = "/lobby/" + this.state.key; //TODO let's say it's correct
    //   }
    //   else {
    //     console.log("show message")
    //   }
    // });

    global.socket.emit('addPlayer', this.state.username, "dead.png", this.state.key);
    global.socket.on('addPlayerSuccess', (data) => {
      console.log("socket = ", global.socket);
      console.log("data = ", data);
    });
    global.socket.emit('createLobby', this.state.key);
    global.socket.on('createLobbySuccess', (data) => {
      console.log("socket2 = ", global.socket);
      console.log("createLobby = ", data);
      window.location = "/lobby/" + this.response.key;
    });
  }

  loginUserJoin() {

    global.socket.emit('addPlayer', this.state.username, "dead.png", this.state.key);
    global.socket.on('addPlayerSuccess', (data) => {
      console.log("socket = ", global.socket);
      console.log("data = ", data);
    });
    global.socket.emit('joinLobby', this.state.key);
    global.socket.on('joinLobbySuccess', (data) => {
      console.log("socket = ", global.socket);
      console.log("joinLobbySuccess = ", data);
      // window.location = "/lobby/" + this.response.key;
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
              <Carousel className="w-25 mx-auto" indicators={false}>
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
              }}>Create private room</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Home;
