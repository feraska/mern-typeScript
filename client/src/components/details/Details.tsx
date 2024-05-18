import { FaPlay } from "react-icons/fa"
import "./details.scss"
import { IoIosRemoveCircle, IoMdAdd } from "react-icons/io"
import { SlDislike, SlLike } from "react-icons/sl"
import React, {  useContext, useState } from "react"
import { card } from "../../hooks/useApi"
import { AuthContext, actions } from "../../context/AuthContext"
import usePut from "../../hooks/usePut"
import { api } from "../../enums/api"
import { MdOutlineExpandMore } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import Movie from "../../pages/movie/Movie"
const Details:React.FC<{item:card,id:number,isList:boolean}> = ({item,id,isList}) => {
     
    const {state,dispatch} = useContext(AuthContext)
    const {put} = usePut(api.addToList)
    const {put:addToLikes} = usePut(api.like)
    const {put:removeFromLikes} = usePut(`${api.dislike}`)
    const {put:remove} = usePut(`${api.removeFromList}`)
    const navigate = useNavigate()
    const removeMovie = async()=> {
        try {
            await remove({image:id})
        dispatch({type:actions.remove_list,payload:id})
        } catch(err) {
            console.log(err)
        }
    }
    const addHandler = async() => {
        try {
        await put({image:item.id})
        
        dispatch({type:actions.add_list,payload:item.id})
        
        } catch(err) {
            console.log(err)
        }
    }
    const likeHandler = async(action:string) => {
        try {
            if(action === actions.like) {
                await addToLikes({image:item.id})
                dispatch({type:actions.like,payload:item.id})
            } else {
                await removeFromLikes({image:item.id})
                dispatch({type:actions.dislike,payload:item.id})
            }
        } catch(err) {
            console.log(err)
        }
    }
    const showDetails = () => {
      navigate(`/movie/${item.id}`)
    }
  
    return (
    
        <div className="details">
            <div className="clicks">
            <div className="buttons">
            <FaPlay className="icon-buttons" onClick={()=>navigate(`/watch/${item.id}`)}/>
            {!isList?<IoMdAdd className="icon-buttons" onClick={addHandler}/>:<IoIosRemoveCircle className="icon-buttons" onClick={removeMovie} />}
            {!state.likes.includes(item?.id)?<SlLike className="icon-buttons" onClick={()=>likeHandler(actions.like)}/>:<SlDislike className="icon-buttons" onClick={()=>likeHandler(actions.dislike)}/>}
            </div>
            <MdOutlineExpandMore className="more" onClick={showDetails}/>
            </div>
            <div className="info">
                <span>{item?.original_title?item?.original_title:item?.original_name}</span>
            </div>
            
            <div className="genre">
            {state.genre?.filter((a)=>item?.genre_ids?.includes(a?.id))?.map((item)=>(
                <span key={item.id} >{item?.name}</span>
            ))}
           </div>
           
        </div>
        
        )
    }
export default Details