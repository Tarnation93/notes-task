// For this task use React v16.8 or higher. Use react hooks instead of life-cycle methods. Use only
// functional components ( no class components ).
// You should create app where user can add notes. User should be able to create note by clicking
// on New note button. On click modal with new note form should be displayed. Form should have
// fields for title, body and author_name and should have Add note button. All notes should be
// stored inside React app as array of objects ( Notes ). You should have 5 preloaded notes from
// notes.json file (create yourself) and show them on app start. User should have option to delete
// note.
// Sort feature
// User should be able to sort notes by date of creation from newest to oldest. it is okay to have only
// sort button.
// Filter feature
// On top of the page you should place one input field for filtering purpose. When user starts typing
// text, notes should be filtered by title and only notes which title starts with text from input should
// be displayed. If input field is empty all notes should be displayed.
// Note should have Title, Date, Body, Author, Status
// For design you can use custom styling or some UI library ( Bootstrap etc. )
// Extra task
// Add draft feature. User can save note as draft and publish it another time.
// No need for backend for this task. App should be reset on page refresh.
// Project should be pushed to Github. Please create new project on Github for this task.
// You have 5 days to finish this project.
// Best Luck
import React,{useState} from 'react';
import {NotesList} from './Components/NotesList'
import {MyModal} from './Modal'
import './App.css'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [newNote, setNewNote] = useState({})
  console.log(newNote)


  return (
    <div className="App">
      <button variant="primary" onClick={() => setModalShow(true)}>
        Add Note
      </button>

      <MyModal
        setNewNote={setNewNote}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <NotesList
        newNote={newNote}
      />
    </div>
  );
}

export default App;
