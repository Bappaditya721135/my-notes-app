import React, {useState} from "react";
import ShowNote from "./ShowNote";
import BackgroundBlur from "./BackgroundBlur";

export default function Note(props) {
    const [showNote, setShowNote] = useState(false);

    const handleNoteClick = () => {
        setShowNote(prevShowNote => !prevShowNote);
    }
    const title = props.note;
    return(
        <>
        <div className="note" onClick={handleNoteClick}>
            <p className="note-title">{title.slice(0, 100)}</p>
            <hr />
            <p className="note-date">{props.date}</p>
        </div>
        {showNote && <BackgroundBlur handleClick={handleNoteClick} />}
        {showNote && <ShowNote
                        note={props.note}
                        date={props.date} />}
        </>
    );
}