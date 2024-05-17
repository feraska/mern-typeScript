import { useParams } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./movie.scss"
import useInfo from "../../hooks/useInfo"
const Movie = () => {
    const id = useParams().id
    const {data:item} = useInfo(`https://api.themoviedb.org/3/movie/${id}`)
    console.log(item)
    return(
        <>
        <Navbar/>
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
        <Footer/>
        </>
    )
}
export default Movie