import { lazy, useContext } from "react";
const Cards = lazy(()=>import ( "../../components/cards/Cards"))  
const Playing = lazy(()=>import("../../components/playing/Playing")) ;
import "./home.scss"

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useGlobal from "../../hooks/useGloabal";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Movie from "../movie/Movie";

const Home = () => {
    const {state} = useContext(AuthContext)
    const [search] = useSearchParams()
    const id = search.get("t")
   useGlobal()
    if(state.login === 2) {
        
        return<Loading/>
    }
    if(state.login === 0) {
        return<Navigate to={"/login"}/>
    }
   
        
    return (
        <>
       {id&&<Movie/>}
        <Navbar/>
        
        
        <div>
        
            <Playing url="https://api.themoviedb.org/3/discover/movie"/>
            <Cards url="https://api.themoviedb.org/3/discover/movie" />
          
          
        </div>
        <Footer/>
        </>
    )
}



export default Home;