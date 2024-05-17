import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
export interface play {
    dates:{
        maximum:Date,
        minimum:Date,
    },
    results:[
        {
            backdrop_path:string,
            original_title:string,
            poster_path:string
        }
    ]
}
export interface card {
    backdrop_path?:string,
    original_title?:string,
    poster_path?:string,
    adult?:boolean,
    genre_ids?:[],
    id:number
}
const useApi = (url:string) => {
    const [data,setData] = useState<play>()
    const [error,setError] = useState("")
    const [loading,setloading] = useState(false)
        const getData = async() => {
            try {
                setloading(true)
              const res =  await axios.get(url,{
                    headers:{
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2ExYmEyODQzOTRiZTdlNmRjOGJjZGQyNjc0MDI3ZCIsInN1YiI6IjY1OWQ3ZGUyNjcyOGE4MDFhNTJmMGY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbpGYJefKmzpVTswVPSaTSzFUWPf3m80zj1sgDAtdn8"
                    }
                })
                setloading(false)
                setData(res.data)
            } catch (err) {
                setloading(false)
                setError((err as Error).message)
                throw new Error((err as AxiosError).response?.data.message)
            }
        }
       

    
    
    return {getData,data,error,loading}
}
export default useApi