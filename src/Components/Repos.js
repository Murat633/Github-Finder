import React from 'react'
import Repo from './Repo'
const Repos = ({repos}) => {
  return repos.map((repo,index)=> <Repo repo={repo} key={index}/>)
}


export default Repos