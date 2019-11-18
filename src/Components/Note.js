import React from 'react';
import { Card } from 'react-bootstrap';
export function Note(props) {
    const notesObj = props.el;
    const { title, body, author, date, status, id } = notesObj;
    return (<Card onClick={() => props.removeNote(id)}
        bg="light" text="black" style={{ width: '18rem', margin: "20px" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title>{body}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Card.Text>{status}</Card.Text>
            <Card.Footer>{date.toLocaleString()}</Card.Footer>
        </Card.Body>
    </Card>

    )
}