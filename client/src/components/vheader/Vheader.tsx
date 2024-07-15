import { Link, NavLink } from "react-router-dom"

import "./vheader.scss"
import { data } from "../navbar/data"

const Vheader = () => {
   
    
    
    return(
        <div className="v-nav" >
           
            {data.map((value,i)=>(
                
                    <Link key={i} to={value.path}>
                    {value.text}
                    </Link>
             
            ))}
               
        </div>
    )
}
export default Vheader