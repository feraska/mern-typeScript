import { Navigate, useSearchParams } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./search.scss"
import useFilter from "../../hooks/useFilter"
import CardItem from "../../components/cardItem/CardItem"
import Loading from "../../components/loading/Loading"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import Movie from "../movie/Movie"
import { isMobile } from "../../utils/getUser"
import Vheader from "../../components/vheader/Vheader"
const Search = () => {
    const [search] = useSearchParams()
    const id = search.get("t")
    const {state} = useContext(AuthContext)
    const {data} = useFilter(`https://api.themoviedb.org/3/movie/now_playing?page=${search.get("q")}`)
    if(state.login === 2) {
       
        return<Loading/>
    }
    if(state.login === 0) {
        return<Navigate to={"/login"}/>
    } 
    return(
        <>
         {id&&<Movie/>}
        <Navbar/>
        {<Vheader/>}
        <div className="filter">
            <h1>Search</h1>
            <ul>
                {data?.results?.map((item,i)=>(
                    <CardItem item={item} key={i}/>
                ))}
            </ul>
        </div>
        <Footer/>
        </>
    )
}
export default Search