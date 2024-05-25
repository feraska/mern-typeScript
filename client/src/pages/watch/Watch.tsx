import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import "./watch.scss"
const Watch = () => {
    const navigate = useNavigate()
    
    return (
    <div className="player">
          <div className="back">
            <IoArrowBack  onClick={() => navigate(-1)} className="back-icon"/>
          </div>
          <video src={"https://res.cloudinary.com/dpel2vfvq/video/upload/v1715930615/video_bie12o.mp4"} autoPlay loop controls  />
        </div>
    )
}
export default Watch