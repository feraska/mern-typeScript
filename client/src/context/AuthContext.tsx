import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import User from "../interfaces/user";
import { card } from "../hooks/useApi";

export interface share  {
    genre:[],
    likes:[],
    list:Array<card>,
    user?:User,
    login:number,
    loading:boolean
}

export enum actions  {
   get_genre = "get_genre",
   get_list = "get_list",
   get_likes = "get_likes",
   add_list = "add_list",
   remove_list = "remove_list",
   login = "login",
   user = "user",
   logout = "logout",
   like = "like",
   dislike = "dislike"
}
export interface action {
    type:actions,
    payload:[] | string | number | User
}
  
const INITIAL_STATE:share = {
    genre:[],
    list:[],
    likes:[],
    user:undefined ,
    login:2,
    loading:false,
}
export const AuthContext = createContext<{
    state: share;
    dispatch: React.Dispatch<unknown>;
  }>({
    state:INITIAL_STATE,
    dispatch: () => null
  });
export const AuthContextProvider:React.FC = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(

        <AuthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}