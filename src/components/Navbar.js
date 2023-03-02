import React, {useState} from 'react';
import DeletedNotes from './DeletedNotes';
import EditedNotes from './EditedNotes';
import Notes from './Notes';

export default function Navbar() {
    // to get the current date 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const newDate = `${day}/${month}/${year}`;


    const [activeNav, setActiveNav] = useState({
        notes: true,
        editedNotes: false,
        deletedNotes: false,
    })

    // This function is to change the selected nav item 
    function handleNavClick(e) {
        setActiveNav(prevActiveNav=> {
            return {notes: false,
                editedNotes: false,
                deletedNotes: false,
                [e.target.attributes.name.value]: true,
            }
        })
    }

    // this is where all the object data is stored 
    const [data, setData] = useState([]);

    function addNote(noteObj) {
        setData(prevData=> {
            prevData.unshift(noteObj);
            return prevData;
        })
    }

    // this function will run when user edit some object 
    const editData = (editObj) => {
        setData(prevData => {
            const newArr = prevData.filter(obj => obj.id !== editObj.id)
            return [editObj, ...newArr];

        })
    }


    // This function will run to delete objects from data array 
    const deleteData = (objectId) => {
        setData(prevData => prevData.map(obj => obj.id === objectId ? {...obj,deleted: true, deleteDate: newDate}: obj))
    }

    return(
        <div>
        <nav className="navbar-dev">
      <ul className="navbar-nav">
        <li className={activeNav.notes ? "activeNavElementColor" : " "} name="notes" onClick={handleNavClick}>Notes</li>
        <li className={activeNav.editedNotes ? "activeNavElementColor" : " "} name="editedNotes" onClick={handleNavClick}>Edited notes</li>
        <li className={activeNav.deletedNotes ? "activeNavElementColor" : " "} name="deletedNotes" onClick={handleNavClick}>deleted notes</li>
      </ul>
</nav>
<div className="main-container">
    {activeNav.notes && <Notes data={data} addNote={addNote} editData={editData} deleteData={deleteData} />}
    {activeNav.editedNotes && <EditedNotes data={data} />}
    {activeNav.deletedNotes && <DeletedNotes data={data} />}
</div>
</div>
    );
}