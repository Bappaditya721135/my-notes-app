import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function AddNote(props) {

    // to get the current date 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const newDate = `${day}/${month}/${year}`;


    // this state is to store the current object
    const [note, setNote] = useState({})

    // this function is for when user type something in the textarea 
    function handleChange(e) {
        setNote(prevNote=> {
           return {
            ...prevNote,
            id: nanoid(),
            date: newDate,
            note: e.target.value,
            edited: false,
            editDate: "",
            deleted: false,
            deleteDate:"",
           }
        })
    }

    // this function will send the data to the navbar and store it inside an array 
    const handleSaveBtnClick = ()=> {
        props.handleAddNoteBtnClick();
        props.addNote(note);
    }

    return(
        <div className="add-note-form">
            <p className="add-note-date">Date: {newDate}</p>
            <textarea className="add-note-textarea" onChange={handleChange} value={note.body}></textarea>
            <button className="save-btn" onClick={handleSaveBtnClick}>save</button>
        </div>
    );
}