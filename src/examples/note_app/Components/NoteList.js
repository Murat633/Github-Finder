import React, { useContext } from "react";
import Note from './Note'
import NotesContext from "./Context/notes-context";

const NoteList = () => {
    const {notes,removeNote} = useContext(NotesContext)

    return (
        notes.map((note,index)=>(
            <Note key={index} note={note} removeNote={removeNote}/>
        ))
    )
}

export default NoteList