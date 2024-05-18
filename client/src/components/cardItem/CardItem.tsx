
import React, { useState } from "react"
import { card } from "../../hooks/useApi"
import "./cardItem.scss"

import Video from "../video/Video"
const CardItem:React.FC<{item:card}> = ({item}) => {
    const [isHovered,setIsHovered] = useState(false)
   
    return (
        <li className="card-item" onMouseOver={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path?item.poster_path:item.backdrop_path}`} />
            {isHovered&&<Video item={item}/>}
        </li>
    )
}
export default CardItem