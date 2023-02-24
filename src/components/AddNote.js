import React from "react";

export default function AddNote(props) {
    const handleSaveBtnClick = ()=> {
        props.handleAddNoteBtnClick();
    }

    return(
        <div className="add-note-form">
            <p className="add-note-date">Date: 24/02/2023</p>
            <textarea className="add-note-textarea"></textarea>
            <button className="save-btn" onClick={handleSaveBtnClick}>save</button>
        </div>
    );
}