import React, {useState, useEffect} from 'react';
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

    // this is the initialState for the data state 
    const initialState = () => {
        const arr = localStorage.getItem("data");
        if(arr.length === 0) {
            return [];
        }
        else {
            return JSON.parse(arr);
        }
    };

    // this is where all the object data is stored 
    const [data, setData] = useState(initialState);


     // this function is to store data in local storage when data state changes
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data])

    function addNote(noteObj) {
        setData(prevData=> {
            prevData.unshift(noteObj);
            return [...prevData];
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


    // Thsi function is to recover deleted objects 
    const recoverObject = (id) => {
        const [delObj] = data.filter(obj => obj.id === id);
        setData(prevData => {
            const newArr = prevData.filter(obj => obj.id !== id);
            newArr.unshift({...delObj,deleted: false, deleteDate: ""})
            return newArr;
        })

    }

    // this function is to delete note permanently 
    const deletePermanently = (id) => {
        setData(prevData => {
            const newArr = prevData.filter(obj => obj.id !== id);
            return newArr;
        })
    }
    console.log(data);

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
    {activeNav.deletedNotes && <DeletedNotes data={data} recoverObject={recoverObject} deletePermanently={deletePermanently} />}
</div>
</div>
    );
}