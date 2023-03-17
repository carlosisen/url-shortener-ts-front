import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../services/useFetch"

const Redirect = ()=>{
    const [message, setMessage]= useState<string>("")
    const {redirect}= useFetch()
    const {shortUrl}= useParams()

    const redirection= async ()=>{
        try{
        const resp = await redirect(shortUrl as string)
        console.log(resp, shortUrl)
        if(typeof(resp)==="string")
        window.location.replace(resp)
        }catch (error: any) {
            console.log(error)
            setMessage("there is an error with your url")
        }

    }   

    useEffect(()=>{
            redirection()
        
    },[])

    return (

        <h1>{message}</h1>

    )
}

export default Redirect