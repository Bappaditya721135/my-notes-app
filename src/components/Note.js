import React from "react";

export default function Note(props) {
    const title = props.note.body;
    return(
        <div className="note">
            <p className="note-title">{title.slice(0, 100)}</p>
            <hr />
            <p className="note-date">25/02/2023</p>
        </div>
    );
}