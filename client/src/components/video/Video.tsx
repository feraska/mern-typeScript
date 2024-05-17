import React, {  useEffect } from "react"
import Details from "../details/Details"
import "./video.scss"
import { useNavigate } from "react-router-dom"

const Video = ({item,id,isList}) => {
    const navigate = useNavigate()
    const getMovie = () => {
       
        navigate(`/movie/${item.id}`)
    }
   
    return(
        <div className="video">
            <div className="show" onClick={getMovie}>
            <video src="https://res.cloudinary.com/dpel2vfvq/video/upload/v1715930615/video_bie12o.mp4" autoPlay loop muted />
            </div>
            <Details item={item} id={id} isList={isList}/>
        </div>
    )
}
export default Video