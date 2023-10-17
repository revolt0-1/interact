import { createContext,useReducer } from "react";
import AuthReducer from './AuthReducer';

const InitialState = {
    user: 
    // null
    {
    "_id": "65196ecb7511505cead70fc3",
    "username": "mihir",
    "email": "mihir@gmail.com",
    "profilePicture": "Person/3.jpeg",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
}
    
,
    isFetching:false,
    error:false
}

export const AuthContext = createContext(InitialState)
 export const AuthContextProvider =({children})=> {
    const[state,dispatch] = useReducer(AuthReducer , InitialState)
    return(
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>

    )
}


