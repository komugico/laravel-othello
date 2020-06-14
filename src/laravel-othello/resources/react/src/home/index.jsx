import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Row, Jumbotron } from 'react-bootstrap';

import { getValueById } from '../share/finder.jsx';
import { getCsrfTokenTag } from '../share/csrf.jsx';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById("home")
);