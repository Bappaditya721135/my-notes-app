import React, {useState} from "react";
import EditNote from "../components/EditNote";

export default function ShowNote(props) {
    // this state is for 3 dot btn
    const [dotBtn, setDotBtn] = useState(false);
    const [editNote, setEditNote] = useState(false);

    // this function will run when user clicks on 3 dot button 
    const handleDotClick = () => {
        setDotBtn(prevDotBtn => !prevDotBtn);
    }

    // this function will run when user clicks on edite option 
    const handleEditClick = () => {
        setEditNote(prevEditeNote => !prevEditeNote);

    }

    // this function will run when user clicks on edite option 
    const handleDeleteClick = () => {
        console.log("delete clicked");
    }

    const dateStr = props.deleted ? `deleted on ${props.deleteDate}`: props.edited ? `edite on ${props.editDate}`: `written on ${props.date}`
    return(
        <>
        <div className="show-note">
          {props.showDotBtn && <i onClick={handleDotClick} className="fa-solid fa-ellipsis-vertical dot-btn">
          {dotBtn && 
                    <ul className="dot-btn-option">
                        <li className="edit" onClick={handleEditClick}><span>edit</span><i className="fa-solid fa-pen-to-square"></i></li>
                        <hr />
                        <li className="delete" onClick={handleDeleteClick}><span>delete</span><i className="fa-solid fa-trash"></i></li>
                    </ul>}
          </i>}
            <p className="show-note-date">{dateStr}</p>
            <p className="show-note-body">{props.note}</p>
        </div>
        {editNote && <EditNote 
                    id={props.id}
                    note={props.note}
                    date={props.date}
                    edited={props.edited}
                    editDate={props.editDate}
                    deleted={props.deleted}
                    deleteDate={props.deleteDate}
                    editData={props.editData}
                    handleEditClick={handleEditClick}
                    handleNoteClick={props.handleNoteClick}
                     />}
        </>
    );
}