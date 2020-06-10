import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, ButtonGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    constructor() {
        super();
        this.postLogout = this.postLogout.bind(this);
    }

    postLogout() {
        event.preventDefault();
        document.getElementById("logout-form").submit();
    }

    tagNavbarContent() {
        if (this.props.username != null) {
            return (
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <NavDropdown title="Othello" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/othello">Top</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            );
        }
        else {
            return (
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            );
        }
    }

    tagNavbarForm() {
        if (this.props.username != null) {
            return (
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button variant="outline-secondary" href="#">{this.props.username}</Button>
                        <Button variant="outline-danger" onClick={this.postLogout}>Logout</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            );
        }
        else {
            return (
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button variant="outline-primary" href="/login">Login</Button>
                        <Button variant="outline-success" href="/register">Register</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            );
        }
    }

    render() {
        let navbarContent = this.tagNavbarContent();
        let nabvarForm = this.tagNavbarForm();

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Othello</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navbarContent}
                    {nabvarForm}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


let username = null;
if (document.getElementById("username") != null) {
    username = document.getElementById("username").textContent;
}

ReactDOM.render(
    <Header
        username={username}
    />,
    document.getElementById("header")
);