import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { STONE_WHITE as W, STONE_BLACK as B, PLAYER_1, PLAYER_2 } from './othello_const.jsx';

export class InfoPanel extends React.Component {
    constructor() {
        super();

        this.renderStoneImg = this.renderStoneImg.bind(this);
        this.calcScore = this.calcScore.bind(this);
    }

    renderStoneImg(player) {
        if (player == this.props.firstPlayer) {
            return <img style={{"height": "auto", "width": "80%"}} src="/img/black.png"></img>;
        }
        else {
            return <img style={{"height": "auto", "width": "80%"}} src="/img/white.png"></img>;
        }
    }

    calcScore(player) {
        if (this.props.logs.length == 0) {
            return 2;
        }
        if (player == this.props.firstPlayer) {
            return this.countStone(B, this.props.logs[this.props.logs.length - 1].stones);
        }
        else {
            return this.countStone(W, this.props.logs[this.props.logs.length - 1].stones);
        }
    }

    countStone(stone, stones) {
        let cnt = 0;
        for (let row of stones) {
            for (let s of row) {
                if (s == stone) {
                    cnt++;
                }
            }
        }
        return cnt;
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Information Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                            <PlayerInfoPanel
                                header="Player 1"
                                name={this.props.player1.name}
                                score={this.calcScore(PLAYER_1)}
                                stoneImg={this.renderStoneImg(PLAYER_1)}
                            />
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={12} xs={12}>
                            <StatusPanel
                                gameId={this.props.gameId}
                                nextPlayer={this.props.nextPlayer}
                                player1={this.props.player1}
                                player2={this.props.player2}
                            />
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                            <PlayerInfoPanel
                                header="Player 2"
                                name={this.props.player2.name}
                                score={this.calcScore(PLAYER_2)}
                                stoneImg={this.renderStoneImg(PLAYER_2)}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

class PlayerInfoPanel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card border="secondary" style={{ width: '100%' }}>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            {this.props.stoneImg}
                        </Col>
                        <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>SCORE: {this.props.score}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

class StatusPanel extends React.Component {
    constructor() {
        super();

        this.renderNextPlayer = this.renderNextPlayer.bind(this);
    }
    
    renderNextPlayer() {
        if (this.props.nextPlayer == PLAYER_1) {
            return this.props.player1.name;
        }
        else {
            return this.props.player2.name;
        }
    }

    render() {
        return (
            <div>
                <h5 className="text-center">Game ID</h5>
                <p className="text-center">{this.props.gameId}</p> <br />
                <h5 className="text-center">Turn</h5>
                <p className="text-center">{this.renderNextPlayer()}</p>
            </div>
        )
    }
}