import React, {useState} from "react";
import AddNote from "./AddNote";
import BackgroundBlur from "./BackgroundBlur";
import Note from "./Note";

export default function Notes(props) {
    console.log(props.data);
    const newArr = props.data.filter(obj => obj.deleted !== true);

    // this state is used toggle addNoteBox 
    const [addNoteBox, setAddNotebox] = useState(false)
    const handleAddNoteBtnClick = ()=> {
        setAddNotebox(prevAddNoteBox=> !prevAddNoteBox);
    }
    return(
        <>
        <div className="notes-container">
                {newArr.length>0 ? newArr.map((note,index)=>{
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
                     deleteData={props.deleteData} 
                     showDotBtn={true} />
                }): <p className="default-text">You don't have any notes yet</p>}

                </div>
            {addNoteBox && <BackgroundBlur handleClick={handleAddNoteBtnClick} />}
            {addNoteBox && <AddNote addNote={props.addNote} handleAddNoteBtnClick={handleAddNoteBtnClick} />}
            <button className="add-note-btn" onClick={handleAddNoteBtnClick}>Add Note <i className="fa-solid fa-pen"></i></button>
        </>
    );
}