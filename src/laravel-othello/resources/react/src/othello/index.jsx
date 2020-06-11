import React from 'react';
import ReactDOM from 'react-dom';
import { Button,  Card, Col, Container, Row, Jumbotron } from 'react-bootstrap';

import { getValueById } from '../share/finder.jsx';

class Index extends React.Component {
    constructor() {
        super();

        this.interval_time = 100;

        this.state = {
            
        }

        this.handleClick_btnViewGameLog = this.handleClick_btnViewGameLog.bind(this);
        this.handleClick_btnCreateRoom = this.handleClick_btnCreateRoom.bind(this);
        this.handleClick_btnJoinRoom = this.handleClick_btnJoinRoom.bind(this);
        this.handleClick_btnWatchRoom = this.handleClick_btnWatchRoom.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            this.interval_time
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        console.log("ticked");
    }

    handleClick_btnViewGameLog() {
        alert("この機能は未実装です．");
    }

    handleClick_btnCreateRoom() {
        alert("この機能は未実装です．");
    }

    handleClick_btnJoinRoom() {
        alert("この機能は未実装です．");
    }

    handleClick_btnWatchRoom() {
        alert("この機能は未実装です．");
    }

    render() {
        return (
            <Container>
                <Row>
                    <br />
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h1>Othello - Top</h1>
                    </Col>
                    <br />
                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Jumbotron>
                                    <h1>Create a room</h1>
                                    <p>
                                        You can build a new game.
                                    </p>
                                    <p>
                                        <Button variant="primary" onClick={this.handleClick_btnCreateRoom}>Create</Button>
                                    </p>
                                </Jumbotron>
                            </Col>
                            <br />
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Jumbotron>
                                    <h1>Join the room</h1>
                                    <p>
                                        You can fight with other players.
                                    </p>
                                    <p>
                                        <Button variant="primary" onClick={this.handleClick_btnJoinRoom}>Join</Button>
                                    </p>
                                </Jumbotron>
                            </Col>
                            <br />
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Jumbotron>
                                    <h1>Watch the game</h1>
                                    <p>
                                        You can watch a existing game.
                                    </p>
                                    <p>
                                        <Button variant="primary" onClick={this.handleClick_btnWatchRoom}>Watch</Button>
                                    </p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <Card.Header as="h5">Player Information</Card.Header>
                            <Card.Body>
                                <Card.Title>{this.props.playerName}</Card.Title>
                                <Card.Text>
                                    Player ID: {this.props.playerId} <br />
                                    Rating: {this.props.playerRating}
                                </Card.Text>
                                <Button id="btnViewGameLog" variant="primary" onClick={this.handleClick_btnViewGameLog}>View my game logs</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

let playerId = getValueById("player_id");
let playerName = getValueById("player_name");
let playerRating= getValueById("player_rating");

ReactDOM.render(
    <Index
        playerId={playerId}
        playerName={playerName}
        playerRating={playerRating}
    />,
    document.getElementById("index")
);