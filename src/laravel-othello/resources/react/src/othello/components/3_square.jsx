import React from 'react';
import { Col } from 'react-bootstrap';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W, PUT_POS as P, FLIP_WAIT_T, FLIP_ANIM_T } from './othello_const.jsx';

export class Square extends React.Component {
    constructor() {
        super();

        this.state = {
            stoneImg: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.updateStone(this.props.stone, this.props.flip)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.turn != prevProps.turn) {
            this.updateStone(this.props.stone, this.props.flip);
        }
    }

    updateStone(stone, flip) {
        if (stone == W || stone == B) {
            if (flip > 0 && flip != P) {
                this.flipAnimation(stone, (flip - 1) * FLIP_WAIT_T);
            }
            else {
                this.setState({ stoneImg: this.getStoneImg(stone, "stone") });
            }
        }
        else {
            this.setState({ stoneImg: this.getStoneImg(E, "") });
        }
    }

    flipAnimation(targetStone, waitInterval) {
        let stone1 = (targetStone == W) ? B : W;
        let stone2 = (targetStone == W) ? W : B;

        const promiseFlip = (timeout, stone, className) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    this.setState({ stoneImg: this.getStoneImg(stone, className) });
                    resolve();
                }, timeout);
            });
        };

        promiseFlip(0, stone1, "stone")
            .then(() => promiseFlip(waitInterval, stone1, "stone anime-flip1"))
            .then(() => promiseFlip(FLIP_ANIM_T, stone2, "stone anime-flip2"))
            .then(() => promiseFlip(FLIP_ANIM_T, stone2, "stone"));
    }

    getStoneImg(stone, className) {
        if (stone == W) {
            return <img className={className} src="/img/white.png"></img>
        }
        else if (stone == B) {
            return <img className={className} src="/img/black.png"></img>
        }
        else {
            return <div></div>;
        }
    }

    handleClick() {
        this.props.putStone(this.props.x, this.props.y);
    }

    render() {
        return (
            <Col className="square-col">
                <button className={this.props.flip == P ? "square put-pos" : "square"} onClick={this.handleClick}>
                    {this.state.stoneImg}
                </button>
            </Col>
        )
    }
}