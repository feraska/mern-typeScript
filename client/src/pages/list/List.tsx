import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./list.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Navigate, useSearchParams } from "react-router-dom"
import Loading from "../../components/loading/Loading"
import useGlobal from "../../hooks/useGloabal"
import ListItem from "../../components/listItem/ListItem"
import Movie from "../movie/Movie"
import { isMobile } from "../../utils/getUser"
import Vheader from "../../components/vheader/Vheader"

const List = ()=> {
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
    return(
        <>
         {id&&<Movie/>}
        <Navbar/>
        {<Vheader/>}
        <div className="list" >
            <h1>My List</h1>
            <ul>
            {state.list?.map((id,i)=>(
               <ListItem id={id} key={i}/>
            ))}
            </ul>
        </div>
        <Footer/>
        </>
    )
}
export default List