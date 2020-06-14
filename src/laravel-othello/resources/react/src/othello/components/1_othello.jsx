import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Board } from './2_board.jsx';
import { ControllPanel } from './2_controll.jsx';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W, PUT_POS as P, STONES_INIT, FLIPS_INIT } from './othello_const.jsx';

import { httpPOST } from '../../share/http_request.jsx';

export class OthelloPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            stones: STONES_INIT,
            flips: FLIPS_INIT,
            turn: 0,             // 一旦stateとして吸収しないと，下位コンポーネントにすぐ伝達されてしまう
        }

        this.putStone = this.putStone.bind(this);
        this.pass = this.pass.bind(this);
        this.surrender = this.surrender.bind(this);
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.turn != prevProps.turn) {
            if (this.props.turn == 0) {
                this.setState((state, props) => ({
                    stones: STONES_INIT,
                    flips: FLIPS_INIT,
                    turn: props.turn,
                }));
            }
            else {
                this.setState((state, props) => ({
                    stones: props.logs[props.turn - 1].stones,
                    flips: props.logs[props.turn - 1].flips,
                    turn: props.turn,
                }));
            }
        }
    }

    componentWillUnmount() {

    }

    putStone(x, y) {
        alert(x + ", " + y);
        return;
        
        if (this.props.logs.length == this.props.turn) {
            if (this.props.nextPlayer == this.props.me) {
                httpPOST("post/putstone/", {
                    "posX": x,
                    "posY": y
                }, (err, res) => {
                    if (res.body["success"]) {
                        
                    }
                    else {
                        alert(res.body["message"]);
                    }
                });
            }
            else {
                alert("あなたの番ではありません．");
            }
        }
        else {
            alert("現在表示中の盤面は最新ではありません．");
        }
    }

    pass() {
        alert("pass");
    }

    surrender() {
        alert("surrender");
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Othello Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <Board
                                stones={this.state.stones}
                                flips={this.state.flips}
                                turn={this.state.turn}
                                putStone={this.putStone}
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ControllPanel
                                pass={this.pass}
                                surrender={this.surrender}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}