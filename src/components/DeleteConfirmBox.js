import React from "react";

export default function DeleteConfirmBox(props) {
    // this function is for when user clicks yes 
    const handleClick = (e) => {
        const value = e.target.name === 'delete' ? true : false;
        if(value) {
            if(props.permanentDelete) {
                props.deletePermanently(props.id)
            }
            else {
                props.sendDeleteObjId();
                props.handleDeleteClick();
                props.handleNoteClick();
            }
        } else {
            props.handleDeleteClick();
        }
        
    }
    return (
        <>
        <div className="deletion-background"></div>
        <div className="deletion-confirm-box">
            <p>are you sure you want to {props.deleted && <span>permanently</span>} delete this note ?</p>
            <div className="buttons">
                <button onClick={handleClick} className="yes-btn" name="delete">delete</button>
                <button onClick={handleClick} className="no-btn" name="cancel">cancel</button>
            </div>
        </div>
        </>
    );
}