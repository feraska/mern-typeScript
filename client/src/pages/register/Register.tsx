import { ChangeEvent, FormEvent, lazy,  useContext,  useState } from "react"
import { Link, Navigate } from "react-router-dom"
const BackgroundImage = lazy(()=> import( "../../components/backgroundImage/BackgroundImage"))
import "./register.scss"
import usePost from "../../hooks/usePost"
import { api } from "../../enums/api"
import { AuthContext } from "../../context/AuthContext"
import Loading from "../../components/loading/Loading"
import useGlobal from "../../hooks/useGloabal"

const Register = () => {
    useGlobal()
    const {state} = useContext(AuthContext)
    const [user,setUser] = useState({
        "email":"",
        "password":"",
        "firstName":"",
        "lastName":""
    })
    const {post,message,loading} = usePost(api.registerMainServer)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleRegister = async(e:FormEvent) => {
        e.preventDefault()
       
        await post(user)
       
        
    }
    if(state.login === 2) {
       
        return<Loading/>
    }
    if(state.login === 1) {
        return<Navigate to={"/"}/>
    } 
    return(
        <div className="register">
        <BackgroundImage/>

        <div className="container">

            <div className="form-container">
        <form onSubmit={handleRegister}>
          <h3>Register</h3>
          <div className="info">
            
                <input type="text" placeholder="first name" name="firstName" onChange={handleChange}/>
            </div>
            <div className="info">
            
                <input type="text" placeholder="last name" name="lastName" onChange={handleChange}/>
            </div>
            <div className="info">
            
                <input type="text" placeholder="email" name="email" onChange={handleChange}/>
            </div>
            <div className="info">
              
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
            </div>
            <button type="submit" disabled={loading?true:false}>Register</button>
            <p>{message}</p>
        </form>
        <Link to={"/login"}>
            
                Sign in Now
            
        </Link>
        </div>

        </div>
    </div>
    )
}
export default Register