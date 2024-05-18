import "./movie.scss"
import useInfo from "../../hooks/useInfo"
import { AiFillCloseCircle } from "react-icons/ai"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
const Movie = () => {
   // const id = useParams().id
   const [search] = useSearchParams()
   const location = useLocation()
   const id = search.get("t")
    const {data:item} = useInfo(`https://api.themoviedb.org/3/movie/${id}`)
    const navigate = useNavigate()
    return(
        <div className="window">
            <div className="data">
            <AiFillCloseCircle className="close" onClick={()=>navigate(location.pathname)}/>
        <div className="movie">
            <div className="item">
            <h1>{item?.original_title}</h1>
            <div className="genre">
                {item?.genres?.map((genre,i)=>(
                    <h3 key={i}>{genre.name}</h3>

            ))}
            </div>
            <div className="lang">
                {item?.spoken_languages.map((lan,i)=>(
                    <h3 key={i}>{lan.english_name}</h3>
                ))}
            </div>
            <div className="images">
            <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}/>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}/>
            </div>
        </div>
        </div>
        </div>
        </div>
        
    )
}
export default Movie