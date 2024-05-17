import { useContext, useEffect } from "react"
import useApi from "./useApi"
import { AuthContext, actions } from "../context/AuthContext"
import useGet from "./useGet"
import { api } from "../enums/api"
const useGlobal = () => {
    const {state,dispatch} = useContext(AuthContext)
    const {data,getData} = useApi("https://api.themoviedb.org/3/genre/movie/list")
    const {data:user,get} = useGet(api.findUser)

    useEffect(()=> {
        const getAll = async()=> {
           try {
            await get()
           } catch (err) {
            dispatch({type:actions.login,payload:0})
           }
            
        }
    return()=> {
        
        if(!state?.user) {
            getAll()
        }
    if(user) {
        dispatch({type:actions.get_likes,payload:user.likes})
        dispatch({type:actions.get_list,payload:user.list})
        dispatch({type:actions.user,payload:user})
        dispatch({type:actions.login,payload:1})
      }
}

    },[user])
    useEffect(()=> {
        const getAll = async()=> {
           
            await getData()
        }
    return()=>{
        if(!state.genre?.length) {
            getAll()
        }
       
    if(data){
    
    dispatch({type:actions.get_genre,payload:data?.genres})
    }
}
}

,[data])
}

export default useGlobal