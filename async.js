//fetching data manageing state

const initialState = {
    loading:true,
    users:[],
    error:''
}
//Actions
const FETCH_USER_REQUEST="FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE="FETCH_USER_FAILURE"

const fetchUserRequest = ()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSucess = users=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUserFailure =error=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}


