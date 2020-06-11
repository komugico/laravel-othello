import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';

import { getValueById } from '../share/finder.jsx';

class Index extends React.Component {
    constructor() {
        super();

        this.interval_time = 100;

        this.state = {
            
        }

        this.handleClick_btnViewGameLog = this.handleClick_btnViewGameLog.bind(this);
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

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
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