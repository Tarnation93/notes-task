import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getDate } from './Logic/utils';
import Button from 'react-bootstrap/Button';

export function MyModal(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  function addingNotes() {
    if (title || body || author) {
      props.setAllNotes([...props.allNotes, { id: props.allNotes.length, title, body, author_name: author, date: new Date(getDate()) }])
    }
  }

  function handleSetTitle(e) {
    setTitle(e.target.value)
  };

  function handleSetBody(e) {
    setBody(e.target.value)
  };

  function handleSetAutor(e) {
    setAuthor(e.target.value)
  };


  return (
    <Modal show={props.showModal}
            onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6> add note title</h6>
        <input onChange={handleSetTitle} value={title}></input>
        <h6> add note body</h6>
        <input onChange={handleSetBody} value={body}></input>
        <h6> add who created note</h6>
        <input onChange={handleSetAutor} value={author}></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addingNotes}>Save</Button>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};