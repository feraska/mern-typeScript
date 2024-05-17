import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./list.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Navigate } from "react-router-dom"
import Loading from "../../components/loading/Loading"
import useGlobal from "../../hooks/useGloabal"
import ListItem from "../../components/listItem/ListItem"

const List = ()=> {
    const {state} = useContext(AuthContext)
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