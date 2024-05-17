import { ChangeEvent, FormEvent, lazy, useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
const BackgroundImage = lazy(()=>import("../../components/backgroundImage/BackgroundImage")) 
import "./login.scss"
import usePost from "../../hooks/usePost"
import { api } from "../../enums/api"
import { AuthContext, actions } from "../../context/AuthContext"
import Loading from "../../components/loading/Loading"
import useGlobal from "../../hooks/useGloabal"

const  Login = () => {
    useGlobal()
    const navigate = useNavigate()
    const {state,dispatch} = useContext(AuthContext)
    const [user,setUser] = useState({
        "email":"",
        "password":""
    })
    const {post,message,loading} = usePost(api.loginMainServer)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
  
    const handleLogin = async(e:FormEvent) => {
        e.preventDefault()
         try {
             await post(user)
             dispatch({type:actions.login})
             navigate("/")
            
         } catch(err) {
            console.log((err as Error).message)
            
         }
         
    }
    if(state.login === 2 || loading) {
        return<Loading/>
    }
    if(state.login === 1) {
        return<Navigate to={"/"}/>
    } 
    return(
        <div className="login">
            <BackgroundImage/>

            <div className="container">

                <div className="form-container">
            <form onSubmit={handleLogin}>
              <h3>Login</h3>
            
                <div className="info">
                
                    <input type="text" name="email" placeholder="user name" onChange={handleChange}/>
                </div>
                <div className="info">
                  
                    <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                </div>
                
                <button type="submit"  disabled={loading?true:false}>Login</button>
                <p>{message}</p>
                
            </form>
            
            <Link to="/register">
                
                    Sign up Now
                
            </Link>
            </div>

            </div>
        </div>
    )
}
export default Login