import React from 'react';
import {Note} from './Note';
import {useFetch} from '../Logic/useFetch'
export function NotesList() {
    const tarot = useFetch('notes.json');
    // console.log(useFetch('notes.json'))
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

