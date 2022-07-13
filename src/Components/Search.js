import React, { useContext, useState } from 'react'
import GithubContext from '../context/GithubContext'

const Search = () => {

    const githubContext = useContext(GithubContext) 
    const [keyword,setKeyword] = useState('')



    const onChange = (e)=> {
        setKeyword(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        githubContext.searchUsers(keyword)
        setKeyword('')
    }

  
    return (
      <form onSubmit={onSubmit}>
       <div className="container my-3">
        <div className="input-group">
                <input value={keyword} placeholder='Lütfen Bir Kullanıcı Adı Girin.' type="text" onChange={onChange} className='form-control' />
                <div className="input-group-append">
                    <button type='submit' className='btn btn-primary'>
                        Search
                    </button>
                </div>
            </div>
       </div>
      </form>
    )
}

export default Search