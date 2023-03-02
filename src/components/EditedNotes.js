import React from "react";
import Note from "./Note";

export default function EditedNotes(props) {
    const editedArr = props.data.filter(obj => obj.deleted !== true).filter(obj => obj.edited === true);
    
    return(
        <div className="edited-notes-container">{editedArr.length>0 ? editedArr.map((note,index) => {
            return <Note 
                    key={index}
                    id={note.id}
                    note={note.note}
                    date={note.date}
                    edited={note.edited}
                    editDate={note.editDate}
                    deleted={note.deleted}
                    deleteDate={note.deleteDate}
                    editData={props.editData}
                    showDotBtn={false} />
        }):
            <p className="default-text">this is all the edited notes</p>}
        </div>
    );
}