import React from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

export class ChatPanel extends React.Component {
    constructor() {
        super();
    }

    createTable(chats) {
        let trs = chats.map((row, idx) => this.createTr([idx].concat(row)));
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </Table>
        );
    }

    createTr(row) {
        let tds = row.map(td => this.createTd(td))
        return (
            <tr>
                {tds}
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
                <Card.Header as="h5">Chat Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            {this.createTable(this.props.chats)}
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your comment..." />
                                </Form.Group>
                                <Button variant="primary" href="#" block>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}