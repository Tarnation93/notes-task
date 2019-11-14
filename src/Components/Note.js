import React from 'react';
export function Note(props) {
    console.log(props)
    const notesObj = props.el
    // for (let x in notesObj) {
    //     console.log(x)
    // }
    const { title, body, author_name, date, status } = notesObj
    // console.log(title,body,author_name,date,status)
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