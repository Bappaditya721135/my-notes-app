import React, {useState} from "react";
import AddNote from "./AddNote";
import BackgroundBlur from "./BackgroundBlur";
import Note from "./Note";

export default function Notes(props) {

    // this state is used toggle addNoteBox 
    const [addNoteBox, setAddNotebox] = useState(false)
    const handleAddNoteBtnClick = ()=> {
        setAddNotebox(prevAddNoteBox=> !prevAddNoteBox);
    }
    return(
        <>
        <div className="notes-container">
                {props.data.length>0 ? props.data.map((note,index)=>{
                    return <Note
                     key={index}
                     note={note}
                     date={note.date} />
                }): <p className="default-text">You don't have any notes yet</p>}

                </div>
            {addNoteBox && <BackgroundBlur handleClick={handleAddNoteBtnClick} />}
            {addNoteBox && <AddNote addNote={props.addNote} handleAddNoteBtnClick={handleAddNoteBtnClick} />}
            <button className="add-note-btn" onClick={handleAddNoteBtnClick}>Add Note <i className="fa-solid fa-pen"></i></button>
        </>
    );
}