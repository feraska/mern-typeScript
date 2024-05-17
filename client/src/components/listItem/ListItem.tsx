import React, { useState } from "react"
import "./listItem.scss"
import ListDetails from "../listDetails/listDetails"
import useInfo from "../../hooks/useInfo"
import { useNavigate } from "react-router-dom"
import Details from "../details/Details"
import Video from "../video/Video"
const ListItem:React.FC<{id:string}> = ({id}) => {
    const {data:item} = useInfo(`https://api.themoviedb.org/3/movie/${id}`)
    const [hover,setHover] = useState(false)
    const navigate = useNavigate()
    const getInfo = () => {
        navigate(`/movie/${id}`)
    }
    return(
        <li className="list-item" onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
             <img alt="" src={`https://image.tmdb.org/t/p/w500/${item?.poster_path?item?.poster_path:item?.backdrop_path}` } onClick={getInfo} />
             {hover&&<Video item={item} id={id} isList={true}/>}
        </li>
    )
}
export default ListItem