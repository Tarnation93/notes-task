import React, { useState, useEffect } from 'react';
import { NotesList } from './Components/NotesList';
import { MyModal } from './Components/Modal';
import './App.css'
import { randomDate, sortNotes } from './Logic/utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [allNotes, setAllNotes] = useState();


  useEffect(() => {
    fetch('notes.json').then(res => res.json()).then((data) => {
      data.notes.forEach(el => {
        el['date'] = randomDate(new Date(2012, 0, 1), new Date());
      })
      setAllNotes(data.notes);
    })
  }, [])
  
  return (
    <div>
     
      <MyModal
        setAllNotes={setAllNotes}
        allNotes={allNotes}
        showModal={modalShow}
        onHide={() => setModalShow(false)}
      />
      {allNotes ? (
        <NotesList
          setAllNotes={setAllNotes}
          allNotes={allNotes}
        />
      ) : null}
      <div className="button-wrapper">
        <Button className="button" variant="primary" onClick={() => setModalShow(true)}>
          Add Note
        </Button>
        <Button className="button" variant="secondary"
          onClick={() => sortNotes(allNotes, setAllNotes)}>sort</Button></div>
    </div>
  );
};

export default App;
