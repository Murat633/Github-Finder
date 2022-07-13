import React, { Component, useContext, useEffect } from 'react'
import Loading from './Loading'
import Repos from './Repos';
import GithubContext from '../context/GithubContext';

const UserDetails = ({match})=> {

  const { getUser,loading,user,repos,getUserRepos } = useContext(GithubContext)

  useEffect(()=>{
        getUser(match.params.login)
        getUserRepos(match.params.login)
  },[])

    const {name,avatar_url,location,html_url,bio,blog,followers,following,public_repos,twitter_username} = user;

    if(loading){
      return <Loading />
    }else{
      return (
        <div className='container my-3'>
            <div className="row">
              <div className="col-md-3">
                  <div className="card">
                    <img src={avatar_url} alt="" className='card-img-top' />
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                        <p><i className='fas fa-map-marker-alt'></i> {location}</p>
                        <p>
                          <a className='btn btn-block btn-primary btn-sm' href={html_url}>Go Github Profile</a>
                        </p>
                    </div>
                  </div>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-body">
                    {
                      bio &&  <>
                                <p>{bio}</p>
                              </>
                    }
                    {
                      blog && <>
                                <p> <i className='fas fa-blog'></i> <a href={blog}>{blog}</a></p>  
                              </>
                    }
                      <div>
                          <span className='badge bg-primary m-1 p-2'>Followers: {followers}</span>
                          <span className='badge bg-danger m-1 p-2'>Following: {following}</span>
                          <span className='badge bg-secondary m-1 p-2'>Respostory: {public_repos}</span>
                      </div>
                      <div className='mt-5'>
                        {twitter_username && <>
                                                <p className='text-primary'>
                                                  <i className='fab fa-twitter'> {twitter_username}</i> 
                                                </p>          
                                             </>}
                      </div>
                  </div>
                  <ul className='list-group list-group-flush'>
                      <Repos repos={repos}/>
                  </ul>
                </div>
              </div>

            </div>
        </div>
      )
    }
}

export default UserDetails