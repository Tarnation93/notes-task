import React from 'react';
import {Note} from './Note';
import {useFetch} from '../Logic/useFetch'
export function NotesList(props) {
    const tarot = useFetch('notes.json',props.newNote);
    console.log(tarot)
    // tarot.response.notes.push(props.newNote)
    if (!tarot.response) {
        return <div> Loading...</div>
    }else {
        return(
            <div>
                {tarot.response.notes.map((el,i) => {
                    return <Note el= {el} key ={i}/> //TODO@ napraviti komponentu za prikazivanje note-a
                })}
            </div>
        )
    }
    

}

