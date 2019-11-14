import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
export function MyModal(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  

  // console.log(props)

  return (
    <Modal
      {...props}
     

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6> add note title</h6>
        <input onChange={e => setTitle(e.target.value)} value={title}></input>
        <h6> add note body</h6>
        <input onChange={e => setBody(e.target.value)} value={body}></input>
        <h6> add who created note</h6>
        <input onChange={e => setAuthor(e.target.value)} value={author}></input>


        <h4>Notes modal</h4>
        <p>
          Tarot
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={()=>props.setNewNote({title,body,author})}>Save</button>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}