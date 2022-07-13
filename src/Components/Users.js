import React, { Component, useContext, useState } from 'react'
import User from './user'
import Loading  from './Loading'
import GithubContext from '../context/GithubContext'


const Users = () => {    
    const githubContext = useContext(GithubContext)
    const {users,loading} = githubContext

    



    if(loading){
        return <Loading/>
    }else{
        return ( 
            <div className='container mt-3'> 
                <div className="row">
                    {
                        users.map((user,index)=>{
                            return(                            
                                <>
                                <User key={index} user={user}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Users