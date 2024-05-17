import { lazy, useContext, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import useGlobal from "../../hooks/useGloabal"
import Loading from "../../components/loading/Loading"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import SelectGenre from "../../components/selectGenre/SelectGenre"

const Cards = lazy(()=> import("../../components/cards/Cards")) 
const Playing = lazy(()=> import("../../components/playing/Playing")) 

const Movies = () => {
    const [genre,setGenre] = useState("")
    useGlobal()
    const {state} = useContext(AuthContext)
    if(state.login === 2) {
        return<Loading/>
    }
    if(state.login === 0) {
        return<Navigate to={"/login"}/>
    } 
    
   
    return (
        <>
        <Navbar/>
        <SelectGenre setGenre={setGenre}/>
            <Playing url="https://api.themoviedb.org/3/movie/now_playing"/>
            <Cards url="https://api.themoviedb.org/3/movie/now_playing" genre={genre}/>
        <Footer/>
        </>
    )
}
export default Movies