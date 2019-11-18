import React from 'react';
import Button from 'react-bootstrap/Button';

export function DraftList(props) {

    if (!props.draftNotes.length) {
        return <div> No drafts...</div>
    } else {
        return (
            <div>
                <div className="note">
                    {props.draftNotes.map((draft,i) => {
                        return <Button className="button" 
                        key={i}
                        onClick={(e) => {props.setDraftId({...props.draftId, draftId:draft.draftId});
                         props.setModalShow(true) ;console.log({...props.draftId, draftId:draft.draftId}) }} 
                          > Draft </Button> 
                    })}
                </div>
            </div>
        )
    }
}