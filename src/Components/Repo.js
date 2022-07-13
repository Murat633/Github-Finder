import React from 'react'

const Repo = ({repo}) => {
  return (
    <ul>
        <li className='list-group-item'><i className='far fa-dot-circle'></i> <a target='_blank' href={repo.html_url}>{repo.name}</a></li>
    </ul>
  )
}

export default Repo