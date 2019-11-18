import React from 'react';
import Button from 'react-bootstrap/Button';
import './DraftList.css'
export function DraftList(props) {

    if (!props.draftNotes.length) {
        return <div> No drafts...</div>
    } else {
        return (
            <div>
                <div className="note">
                    {props.draftNotes.map((draft, i) => {
                        return <div key={i} className="button-wrapper">
                            <Button className="button"

                                onClick={(e) => {
                                    props.setDraftId({ ...props.draftId, draftId: draft.draftId });
                                    props.setModalShow(true); console.log({ ...props.draftId, draftId: draft.draftId })
                                }}
                            > Draft {draft.title} </Button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}