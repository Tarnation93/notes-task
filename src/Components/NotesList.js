import React, { useState } from 'react';
import { Note } from './Note';
import './NotesList.css'

export function NotesList(props) {
    const [searchBox, setSearchBox] = useState("");
    function removeNote(index) {
        const a = props.allNotes.filter((el) => el.id !== index)
        props.setAllNotes(a)
    }
    function filterNotes(event) { 
        setSearchBox(event.target.value);
    };


    if (!props.allNotes) {
        return <div> Loading...</div>
    } else {
        return (
            <div>
                <div className="input-div">
                    <input className="input" onChange={(e) => filterNotes(e)} placeholder="Search Notes" />
                </div>
                <div className="note">
                    {props.allNotes.filter(el => el.title.includes(searchBox)).map((el, i) => {
                        return <Note el={el} key={i} removeNote={removeNote} /> //TODO@ napraviti komponentu za prikazivanje note-a
                    })}
                </div>
            </div>
        )
    }
};

