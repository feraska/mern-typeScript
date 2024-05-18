import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import User from "../interfaces/user";
import { genere } from "../hooks/useApi";

export interface AppState   {
    genre:Array<genere>;
    likes:Array<number>;
    list:Array<number>;
    user?:User;
    login:number;
    loading:boolean;
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
export interface action  {
    type:actions,
    payload:Array<number> | string | number | User
    
}
  
 const INITIAL_STATE:AppState = {
    genre:[],
    list:[],
    likes:[],
    user:undefined ,
    login:2,
    loading:false,
}
interface Props {
    children: React.ReactNode;
  }
export const AuthContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<action>;
  }>({
    state:INITIAL_STATE,
    dispatch: () => null
  });
  
export const AuthContextProvider:React.FC<Props> = ({children}) => {
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