import React, {useState} from "react";
import AddNote from "./AddNote";
import BackgroundBlur from "./BackgroundBlur";

export default function Notes() {
    const [addNoteBox, setAddNotebox] = useState(false)
    const handleAddNoteBtnClick = ()=> {
        setAddNotebox(prevAddNoteBox=> !prevAddNoteBox);
    }
    return(
        <div className="notes-container">
            <p>this is all the notes</p>
            {addNoteBox && <BackgroundBlur handleClick={handleAddNoteBtnClick} />}
            {addNoteBox && <AddNote handleAddNoteBtnClick={handleAddNoteBtnClick} />}
            <button className="add-note-btn" onClick={handleAddNoteBtnClick}>Add Note <i class="fa-solid fa-pen"></i></button>
        </div>
    );
}