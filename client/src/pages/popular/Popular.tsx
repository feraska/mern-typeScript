import { lazy, useContext } from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import useGlobal from "../../hooks/useGloabal"
import { AuthContext } from "../../context/AuthContext"
import Loading from "../../components/loading/Loading"
import { Navigate } from "react-router-dom"

const Cards = lazy(()=> import("../../components/cards/Cards")) 
const Playing = lazy(()=> import("../../components/playing/Playing")) 

const Popular = () => {
    useGlobal()
    const {state} = useContext(AuthContext)
    if(state.login === 2) {
        return<Loading/>
    }
    if(state.login === 0) {
        return<Navigate to={"/login"}/>
    } 
    return(
        <>
        <Navbar/>
    
            <Playing url="https://api.themoviedb.org/3/movie/popular"/>
            <Cards url="https://api.themoviedb.org/3/movie/popular"/>
        
        <Footer/>
        </>
    )
}
export default Popular