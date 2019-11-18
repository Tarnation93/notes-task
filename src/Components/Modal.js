import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getDate } from '../Logic/utils';
import Button from 'react-bootstrap/Button';

export function MyModal(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  function addingNotes() {
    if (title.length || body.length || author.length) {
      props.setAllNotes([...props.allNotes, { id: props.allNotes.length, title, body, author, date: new Date(getDate()) }])
      const b = props.draftNotes.filter((el, i) => {
        return i !== props.draftId.draftId - 1
      })
      const c = b.map((el, i) => {
        return { ...el, draftId: i + 1 }
      })
      props.setDraftNotes(c)
    }
  }
  function handleDraftNotes() {
    if (title || body || author) {
      if (props.draftId.draftId) {
        props.setDraftNotes(props.draftNotes.map((el) => {
          let elCopy = { ...el };
          if (elCopy.draftId === props.draftId.draftId) {
            elCopy = { draftId: elCopy.draftId, title, body, author };
          }
          return elCopy;
        }))
        props.setDraftId(false);
      } else {
        props.setDraftNotes([...props.draftNotes, { draftId: props.draftNotes.length + 1, title, body, author }])
      }
    }
  }
  useEffect(() => {
    if (props.draftNotes.length && props.draftId.draftId) {
      setTitle(props.draftNotes[props.draftId.draftId - 1].title)
      setBody(props.draftNotes[props.draftId.draftId - 1].body)
      setAuthor(props.draftNotes[props.draftId.draftId - 1].author)
    }
  }, [props.draftId.draftId])


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
      <Modal.Header onClick={() => props.setDraftId(false)} closeButton>
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
        <Button onClick={(e) => {

          addingNotes(e)
          setTitle('')
          setBody('')
          setAuthor('')
        }}
        >Save</Button>
        <Button variant="secondary" onClick={(e) => {
          props.onHide(e);
          handleDraftNotes();
          props.setDraftId(false)
        }} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
};