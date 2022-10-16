import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    console.log("This is the notes", notes)
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <Note handleDeleteNote={handleDeleteNote} key={note.id} id={note.id} text={note.text} date={note.date} />
                ))
            }
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList