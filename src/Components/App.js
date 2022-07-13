import React, { useState } from 'react'
import Navbar from './Navbar'
import propTypes from 'prop-types'
import NotFound from './NotFound'
import Home from './Home'
import About from './about'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import UserDetails from './UserDetails'
import GithubState from '../context/GithubState'



const App = () => {

  const [loading,setLoading] = useState()
  const[repos,setRepos] = useState([])



    return (
       <GithubState>
               <BrowserRouter>
                <Navbar/>
                <Switch>
                  <Route exact path='/' component={Home} />

                  <Route path='/about' component={About}/>

                  <Route exact path='/user/:login' component={UserDetails}/>

                  <Route component={NotFound}></Route>
                  

                </Switch>

            </BrowserRouter>
       </GithubState>
    )
  }


export default App


Navbar.defaultProps = { // Default Props
    title:"Github Finder",
    icon:"fab fa-github"
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
}
