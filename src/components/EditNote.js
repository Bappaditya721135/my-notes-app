import React, {useState} from "react";

export default function EditNote(props) {

    // to get the current date 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const newDate = `${day}/${month}/${year}`;

    const [editObj, setEditObj] = useState({
        id: props.id,
        date: props.date,
        note: props.note,
        edited: props.edited,
        editDate: props.editDate,
        deleted: props.deleted,
        deleteDate: props.deleteDate,
    })  

    // this function is for when user changes something in the textarea 
    const handleChange = (e) => {
        setEditObj(prevEditObj => {
            return {
                ...prevEditObj,
                note: e.target.value,
                edited: true,
                editDate: newDate,
            }
        })
    }

    // This function will run when user clicks on save btn this function will send the new edited object to the editeData function in navbar component 
    const handleEditSave = () => {
        props.editData(editObj);
        props.handleNoteClick();
        props.handleEditClick();
    }


    return(
        <div className="edit-note-container">
            <p className="edit-note-date">{newDate}</p>
            <textarea className="edit-note-textarea" onChange={handleChange} value={editObj.note}></textarea>
            <button className="edit-note-save-btn" onClick={handleEditSave}>save</button>
        </div>
    );
}