import React from "react";
import Note from "./Note";

export default function DeletedNotes(props) {
    const deletedArr = props.data.filter(obj => obj.deleted === true);

    return(
        <div className="Deleted-notes-container">
            {deletedArr.length>0 ? deletedArr.map((note,index) => {
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
                    showDotBtn={false}
                    recoverObject={props.recoverObject}
                    deletePermanently={props.deletePermanently} />
        }):
            <p className="default-text">You don't have any Deleted notes</p>}
        </div>
    );
}