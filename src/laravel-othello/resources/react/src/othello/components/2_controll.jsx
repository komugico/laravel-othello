import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export class ControllPanel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Controll Panel</Card.Header>
                <Card.Body>
                    <Button variant="primary" href="#" block>Pass</Button>
                    <Button variant="danger" href="#" block>Surrender</Button>
                </Card.Body>
            </Card>
        );
    }
}