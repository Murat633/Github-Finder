import React,{ useReducer } from "react"
import GithubReducer from './GithubReducer'
import GithubContext from "./GithubContext"
import axios from 'axios'


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState)

    const searchUsers = (keyword)=>{
        setLoading(true)
        setTimeout(() => {
          
          if(keyword.length > 0){
              axios
              .get(`https://api.github.com/search/users?q=${keyword}`)
              .then(res=>{
                dispatch({
                    type: "SEARCH_USERS",
                    payload:res.data.items
                })           
            })
          }else{
            setLoading(false)
          }
          
        }, 1000);
    
      }


      
      const setLoading = () => {
        dispatch({type: "SET_LOADİNG"})
      }

      const getUser = (username)=>{
        setLoading(true)
        setTimeout(() => {
          axios.get(`https://api.github.com/users/${username}`)
          .then(res=>res.data)
          .then(data=>{
            dispatch({
              type:"GET_USER",
              payload:data
            })
          })
        }, 1000);
      }


      const getUserRepos = (username) => {
        setLoading()
        setTimeout(() => {
          axios.get(`https://api.github.com/users/${username}/repos`)
          .then(res=>res.data)
          .then(data=>{
            dispatch({
              type: "GET_REPOS",
              payload: data
            })
          })
        }, 1000);
      }

    return (
        <GithubContext.Provider
            value={{
                users:state.users,
                user:state.user,
                repos:state.repos,
                loading:state.loading,
                searchUsers,
                getUser,
                getUserRepos
            }}>
            {props.children}

        </GithubContext.Provider>
    )
}

export default GithubState