import React, {useContext, useState} from 'react'
import NotesContext from "./Context/notes-context";


function AddNoteForm() {
    const {dispatch} = useContext(NotesContext)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const addNote = (e) =>{
        e.preventDefault()
        // setNotes([...notes])
        if(title ) {     
            dispatch({
                type: 'ADD_NOTE',
                title,
                body
            })       
            setTitle('')                  
            setBody('')  
        }
        
    }

  return (
    <form onSubmit={addNote}>
        <div className="form-group">
            <input onChange={ (e) => setTitle(e.target.value) } value={title} type="text" className="form-control"  placeholder='Add a New Note'/>
        </div>

        <div className="form-group">
            <textarea onChange={ (e) => setBody(e.target.value) } value={body} type="text" className="form-control"  placeholder='Add a New Note'></textarea>
        </div>
        <button className='btn btn-primary btn-block w-100 mt-3'>Add Note</button>
    </form>
  )
}

export default AddNoteForm