import React from 'react';
export function Note(props) {
    const notesObj = props.el
    const { title, body, author_name, date, status } = notesObj
    return (<div>
        <h5>{title}</h5>
        <a>{body}</a>
        <br />
        <a>{author_name}</a>
        <br />
        <a>{date}</a>
        <br />
        <a> {status} </a>
    </div>

    )
}