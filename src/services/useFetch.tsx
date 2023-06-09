import { useState } from "react"
import serverReq from "./serverRequest"
import { elementsStates } from "../types"

const useFetch= ()=>{
    const [loading, setLoading]=useState<boolean>(false)

    const registerUser= async (body :elementsStates["iRegisterUser"]) =>{
        setLoading(true)
        try{
            const resp= await serverReq.registerUser(body)
            return resp.data.user
        }catch(error : any ){
            const msg = error.message
            throw Error(msg)
        }finally{
            setLoading(false)
        }
        
    }
    const registerUrl= async (body :elementsStates["iRegisterUrl"]) =>{
        setLoading(true)
        try{
            const token = window.localStorage.getItem("tokenUrl") as string
            const resp = await serverReq.registerUrl(body, token)
            return resp.data.url
        } catch (error: any) {
            const msg = error.message
            throw Error(msg)
        } finally {
            setLoading(false)
        }
    }
    const loginUser= async (body :elementsStates["iLoginUser"]) =>{
        setLoading(true)
        try{
            const resp= await serverReq.loginUser(body)
            return resp.data.user 
        } catch (error: any) {
            const msg = error.message
            throw Error(msg)
        } finally {
            setLoading(false)
        }
    }
    const getAllUrl= async () =>{
        setLoading(true)
        try{
            const token = window.localStorage.getItem("tokenUrl") as string
            const resp = await serverReq.getAllUrl(token)
            if (!resp.data.length){
                return false
            }
            return resp.data as elementsStates["iUrl"][]
        } catch (error: any) {
            const msg = error.message
            throw Error(msg)
        } finally {
            setLoading(false)
        }
    }

    const redirect= async (url: string)=>{
        try{
            const resp= await serverReq.redirect(url)
            return resp.data.redirect as string
        }catch(error){
            throw error
        }
    }

    return{
        loading,
        registerUser,
        registerUrl,
        loginUser,
        getAllUrl,
        redirect
    }
}

export default useFetch