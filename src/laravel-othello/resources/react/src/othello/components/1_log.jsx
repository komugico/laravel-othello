import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

export class LogPanel extends React.Component {
    constructor() {
        super();
    }

    createTable() {
        let trs = this.props.logs.map((log, idx) => this.createTr(log, idx));
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Log</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </Table>
        );
    }

    createTr(log, idx) {
        return (
            <tr onClick={() => this.props.playbackLog(idx)}>
                {this.createTd(idx + 1)}
                {this.createTd(log["player_username"])}
                {this.createTd("(" + log["posX"] + ", " + log["posY"] +")")}
            </tr>
        );
    }

    createTd(td) {
        return (
            <td>{td}</td>
        );
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Log Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            {this.createTable()}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}