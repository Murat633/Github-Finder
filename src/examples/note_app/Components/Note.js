import React, { useContext }  from 'react'
import NotesContext from './Context/notes-context'

function Note({note}) {

  const {dispatch} = useContext(NotesContext)

    
  return (
    <tr>
        <td style={{width:'40%'}}>{note.title}</td>
        <td>
            {note.body}
        </td>
        <td style={{width:'3%'}}>
            <button onClick={()=>dispatch({type:'REMOVE_NOTE',title:note.title})} className='btn btn-danger btn-sm'>
                    <i className='fas fa-times'></i>
            </button>
        </td>
    </tr>
  )
}

export default Note