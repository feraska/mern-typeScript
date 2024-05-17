import { ChangeEvent, ChangeEventHandler, lazy, useContext, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import useGlobal from "../../hooks/useGloabal"
import { AuthContext } from "../../context/AuthContext"
import Loading from "../../components/loading/Loading"
import { Navigate } from "react-router-dom"
const Cards = lazy(()=> import("../../components/cards/Cards")) 
const Playing = lazy(()=> import("../../components/playing/Playing")) 
import  "./tv.scss"
import SelectGenre from "../../components/selectGenre/SelectGenre"
const Tv = ()=> {
    const {state} = useContext(AuthContext)
    const [genre,setGenre] = useState("")
    useGlobal()
    if(state.login === 2) {
        return<Loading/>
    }
    if(state.login === 0) {
        return<Navigate to={"/login"}/>
    } 
    return(
        <>
        <Navbar/>
        <SelectGenre setGenre={setGenre}/>
        <Playing url="https://api.themoviedb.org/3/discover/tv"/>
        <Cards url="https://api.themoviedb.org/3/discover/tv" genre={genre}/>
    <Footer/>
    </>
    )
}
export default Tv