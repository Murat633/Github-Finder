import React,{useEffect,useState,useReducer} from 'react'
import notesReducer from '../reducers/notes'
import AddNoteForm from './AddNoteForm'
import NoteList from './NoteList'
import NotesContext from './Context/notes-context'


const NoteApp = ()=>{
    // const [notes,setNotes] = useState([])
    const [notes,dispatch] = useReducer(notesReducer,[])


    useEffect(()=>{
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData) {
            dispatch({type: 'POPULATE_NOTES',notes:notesData})
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))     
        
            
    },[notes])

    

    const removeNote= (title) => {
        // setNotes(notes.filter((note)=> note.title != title))
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }


    return(
        <NotesContext.Provider value={{notes,dispatch}}>
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    {
                        notes && (
                            <table className='table table-sm table-strped mb-0'>
                                <tbody>
                                    {
                                        <NoteList/>
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="card mb-">
                    <div className="card-header">Add a New Note</div>
                    <div className="card-nody">
                        <AddNoteForm/>
                    </div>
                </div>
            </div>       
        </NotesContext.Provider> 
    )
}

export default NoteApp