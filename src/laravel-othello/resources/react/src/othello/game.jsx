import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'react-bootstrap';

import { InfoPanel } from './components/1_info.jsx';
import { OthelloPanel } from './components/1_othello.jsx';
import { LogPanel } from './components/1_log.jsx';
import { ChatPanel } from './components/1_chat.jsx';

import { PLAYER_1, PLAYER_2, OBSERVER } from './components/othello_const.jsx';

import { getValueById } from '../share/finder.jsx';
import { httpGET } from '../share/http_request.jsx';

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            player1: { name: "" },
            player2: { name: "" },
            firstPlayer: PLAYER_1,
            nextPlayer: PLAYER_1,
            me: OBSERVER,
            turn: 0,
            playbackLogIdx: -1,
            gameId: -1,
            logs: [],
            chats: [["Player 1", "First Comment", "2020/5/12 10:12"], ["Plyaer 2", "Second Comment", "2020/5/12 10:14"], ["Plyaer 1", "Third Comment", "2020/5/12 10:16"]].reverse()
        }

        this.playbackLog = this.playbackLog.bind(this);

        this.getGameInfo();
    }

    componentDidMount() {
        // this.timer = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
    }

    tick() {
        this.getLogs();
        if (this.state.playbackLogIdx >= 0) {
            this.setState((state, props) => ({
                turn: state.playbackLogIdx,
                playbackLogIdx: -1,
            }));
        }
        else {
            if (this.state.logs.length > 0) {
                if (this.state.turn < this.state.logs[this.state.logs.length - 1].turn) {
                    this.setState((state, props) => ({
                        turn: state.turn + 1,
                    }));
                }
            }
        }
    }

    getGameInfo() {
        httpGET(location.href + "/get/gameinfo", {}, (err, res) => {
            if (res.body.success) {
                let me = OBSERVER;
                if (this.props.playerName == res.body.info.player1.name) {
                    me = PLAYER_1;
                }
                else if (this.props.playerName == res.body.info.player2.name) {
                    me = PLAYER_2;
                }
                this.setState((state, props) => ({
                    player1: res.body.info.player1,
                    player2: res.body.info.player2,
                    gameId: res.body.info.game.id,
                    firstPlayer: res.body.info.first_player,
                    me: me
                }));
            }
            else {
                alert(res.body.message);
            }
        });
    }

    getLogs() {
        httpGET(location.href + "/get/logs/", {}, (err, res) => {
            if (res.body.success) {
                let nextPlayer = this.state.firstPlayer;
                if (res.body.logs.length > 0) {
                    let latest_username = res.body.logs.slice(-1)[0].player.name;
                    if (latest_username == this.state.player1.name) {
                        nextPlayer = PLAYER_2;
                    }
                    else {
                        nextPlayer = PLAYER_1;
                    }
                }
                this.setState((state, props) => ({
                    logs: res.body.logs,
                    nextPlayer: nextPlayer
                }));
            }
            else {
                alert(res.body.message);
            }
        });
    }

    getChat() {

    }

    playbackLog(idx) {
        this.setState((state, props) => ({
            playbackLogIdx: idx
        }));
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row>
                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <InfoPanel
                                    player1={this.state.player1}
                                    player2={this.state.player2}
                                    logs={this.state.logs}
                                    turn={this.state.turn}
                                    firstPlayer={this.state.firstPlayer}
                                    nextPlayer={this.state.nextPlayer}
                                    gameId={this.state.gameId}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <OthelloPanel
                                    logs={this.state.logs}
                                    nextPlayer={this.state.nextPlayer}
                                    me={this.state.me}
                                    turn={this.state.turn}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <LogPanel
                                    logs={this.state.logs}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <ChatPanel
                                    chats={this.state.chats}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
            </Container>
        );
    }
}

let playerId = getValueById("player_id");
let playerName = getValueById("player_name");
let playerRating = getValueById("player_rating");

ReactDOM.render(
    <Game
        playerId={playerId}
        playerName={playerName}
        playerRating={playerRating}
    />,
    document.getElementById("game")
);