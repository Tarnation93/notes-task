import React from 'react';
import Modal from 'react-bootstrap/Modal'
export function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input value = "tarot"></input>
        <h4>Notes modal</h4>
        <p>
          Tarot
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onCLick ={props.onHide}>Save</button>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}