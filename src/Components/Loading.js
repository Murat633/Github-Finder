import React,{Fragment} from 'react'
import loading from './loading.gif'

function Loading() {
  return (
    <Fragment>
        <img src={`/${loading}`} alt="loading..." style={{width:'200px',display:'block',margin:'auto'}}/>
    </Fragment>
  )
}

export default Loading
