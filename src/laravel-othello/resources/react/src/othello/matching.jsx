import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

import { getValueById, getArrayValuesByName } from '../share/finder.jsx';
import { httpGET, httpPOST } from '../share/http_request.jsx';
import { getCsrfTokenTag } from '../share/csrf.jsx';

class Matching extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }

        this.renderTable = this.renderTable.bind(this);
        this.renderTr = this.renderTr.bind(this);
    }

    renderTable() {
        let trs = this.props.games.map((game) => this.renderTr(game));
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>gameId</th>
                        <th>name</th>
                        <th>rating</th>
                        <th>fight</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </Table>
        );
    }

    renderTr(game) {
        let button = this.renderButton(game[0]);
        return (
            <tr>
                <td>{game[0]}</td>
                <td>{game[1]}</td>
                <td>{game[2]}</td>
                <td>{button}</td>
            </tr>
        )
    }

    renderButton(gameId) {
        return (
            <Button variant="primary" onClick={() => this.handleClick(gameId)}>fight</Button>
        );
    }

    handleClick(gameId) {
        httpPOST("/othello/post/joinroom/" + gameId, {}, (err, res) => {
            if (res.body["success"]) {
                location.href = res.body["url"];
            }
            else {
                alert(res.body["message"]);
            }
        });
    }

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        {this.renderTable()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

let playerId = getValueById("player_id");
let playerName = getValueById("player_name");
let playerRating = getValueById("player_rating");

let games = getArrayValuesByName("game")

ReactDOM.render(
    <Matching
        playerId={playerId}
        playerName={playerName}
        playerRating={playerRating}
        games={games}
    />,
    document.getElementById("matching")
);