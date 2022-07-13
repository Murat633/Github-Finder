const GithubReducer = (state,action) => {
    switch(action.type) {
        case "SEARCH_USERS":
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case "GET_USER":
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        case "GET_REPOS":
            return {
                ...state,
                repos:action.payload,
                loading:false
            }
        case "SET_LOADİNG":
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}

export default GithubReducer