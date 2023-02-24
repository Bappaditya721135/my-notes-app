import React, {useState} from 'react';
import DeletedNotes from './DeletedNotes';
import EditedNotes from './EditedNotes';
import Notes from './Notes';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState({
        notes: true,
        editedNotes: false,
        deletedNotes: false,
    })


    function handleNavClick(e) {
        setActiveNav(prevActiveNav=> {
            return {notes: false,
                editedNotes: false,
                deletedNotes: false,
                [e.target.attributes.name.value]: true,
            }
        })
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
    {activeNav.notes && <Notes />}
    {activeNav.editedNotes && <EditedNotes />}
    {activeNav.deletedNotes && <DeletedNotes />}
</div>
</div>
    );
}