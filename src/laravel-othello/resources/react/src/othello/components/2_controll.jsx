import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export class ControllPanel extends React.Component {
    constructor() {
        super();
        
        this.handleClick_btnPass = this.handleClick_btnPass.bind(this);
        this.handleClick_btnSurrender = this.handleClick_btnSurrender.bind(this);
    }

    handleClick_btnPass() {
        this.props.pass();
    }

    handleClick_btnSurrender() {
        this.props.surrender();
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Controll Panel</Card.Header>
                <Card.Body>
                    <Button variant="primary" onClick={this.handleClick_btnPass} block>Pass</Button>
                    <Button variant="danger" onClick={this.handleClick_btnSurrender} block>Surrender</Button>
                </Card.Body>
            </Card>
        );
    }
}