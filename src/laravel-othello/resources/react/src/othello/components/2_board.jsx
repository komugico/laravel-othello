import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Square } from './3_square.jsx';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W } from './othello_const.jsx';

export class Board extends React.Component {
    constructor() {
        super();
    }
    
    createBoard(stones, flips) {
        let board = stones.map((row, y) =>
            <Row className="board-row" noGutters>
                <Col></Col>
                <Col></Col>
                {row.map((stone, x) => this.renderSquare(stone, x, y, flips[y][x]))}
                <Col></Col>
                <Col></Col>
            </Row>
        )
        return board;
    }

    renderSquare(stone, x, y, flip) {
        return (
            <Square
                stone={stone}
                flip={flip}
                x={x}
                y={y}
                turn={this.props.turn}
                putStone={this.props.putStone} />
        );
    }

    render() {
        return (
            <div>
                {this.createBoard(this.props.stones, this.props.flips)}
            </div>
        );
    }
}