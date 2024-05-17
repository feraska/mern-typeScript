import React, {  lazy, useEffect, useRef, useState } from "react"
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io"
import useApi from "../../hooks/useApi"
const CardItem = lazy(()=> import("../cardItem/CardItem")) 
import "./cards.scss"

const Cards:React.FC<{url:string}> = ({url,genre}) => {
    const {data,getData} = useApi(url)
    const list = useRef<HTMLInputElement>()
    const [numberSlider,setNumberSlider] = useState(0)
    useEffect(()=> {
        const get = async()=> {
            getData()
        }
        get()

    },[])
    const handleSlider = async(type:string) => {
        if(!list.current) {
            return
        }
        const distance = list.current.getBoundingClientRect().x
        if(type === "left") {
            list.current.style.transform = `translateX(${215+distance}px)`
            setNumberSlider((prev)=>prev-1)
        } if(type === "right") {
            list.current.style.transform = `translateX(${-215+distance}px)`
            setNumberSlider((prev)=>prev+1)
        }
   }
   if(genre) {
    return(
    <div className="slider">
            <IoIosArrowBack className={`icon left ${(numberSlider===0)?"none":"visible"}`}  onClick={()=>handleSlider("left")}/>
        <ul ref={list}>
            {data?.results.length&&
            data.results.filter((a)=>a?.genre_ids?.includes(+genre))?.map((item,i)=>(
                
                <CardItem item={item} key={i}/>
                
                
            ))
            } 
        </ul>
        <IoIosArrowForward className={`icon right ${(numberSlider===data.results.filter((a)=>a?.genre_ids?.includes(+genre)).length)?"none":"visible"}`} onClick={()=>handleSlider("right")}/>
        </div>
   
   
    )
}
    return(
        <div className="slider">
            <IoIosArrowBack className={`icon left ${(numberSlider===0)?"none":"visible"}`}  onClick={()=>handleSlider("left")}/>
        <ul ref={list}>
            {data?.results.length&&
            data.results.map((item,i)=>(
                
                <CardItem item={item} key={i}/>
                
                
            ))
            } 
        </ul>
        <IoIosArrowForward className={`icon right ${(numberSlider===data?.results.length)?"none":"visible"}`} onClick={()=>handleSlider("right")}/>
        </div>
    )
}
export default Cards