import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import User from "../interfaces/user"

const useGet = (url:string) => {
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState<User>()

    const get = async()=> {
            try {
                setLoading(true)
                const message = await axios.get(url,{
                    withCredentials:true
                })
                
                setData(message.data)
                setError(false)
                setLoading(false)
            } catch(err) {
                setData(undefined)
                setError(true)
                setLoading(false)
                throw new Error((err as AxiosError).response?.data.message)
                
            }
       
        
    }
    
    return {
        get,error,data,loading
    }
}
export default useGet