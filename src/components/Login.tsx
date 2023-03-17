import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { elementsStates, IGlobalContext } from "../types";
import { useGlobalContext } from "../context/appContext";
import SpinRotate from "./SpinRotate";
import useFetch from "../services/useFetch";
import useValidator from "../hooks/useValidator";
import "../assets/Login.css"


const Login = ()=>{
    const [user, setUser]= useState<elementsStates["iLoginUser"]>({
        email: "",
        password: ""
    })
    const toHome= useNavigate()
    const {loading, loginUser }=useFetch()
    const { validationMessage, validateBody }=useValidator()
    const { dispatch }= useGlobalContext() as IGlobalContext


    // const er
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit= async (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try{
            validateBody(user)
            const resp= await loginUser(user) as elementsStates["iUser"]
            dispatch<elementsStates["iAction"]>({
                type: "insertUser",
                payload: resp
            })
            window.localStorage.setItem("tokenUrl", resp.token as string)
            toHome("/urlCreation")
        }catch(error){
            return 
        }
    }

    return (
        <form className="Login-form" onSubmit={handleSubmit} name={"Form"}>
            <label htmlFor={"Form"} className="Login-label">Login</label>
            <div className="Login-div--mainFormData">
                <label className="Login-label" htmlFor={"email"}>Email:</label>
                <input className="Login-input" name={"email"} type={"email"} placeholder={"email"} onChange={handleChange} value={user.email}/>
                <label className="Login-label" htmlFor={"password"}>Password:</label>
                <input className="Login-input" name={"password"} onChange={handleChange} type={"password"} placeholder={"Password"} value={user.password}/>
            </div>
            {loading ? <SpinRotate/> : <button className="Login-button-form" type={"submit"}>Push to Login</button>}
            { typeof(validationMessage) !== "boolean" ? 
                <p className="Login-errorValidation">{validationMessage}</p> : null }
            <Link to="/register">
                <h5 className="Login-Link">Click here to <strong className="Login-strong">Register</strong></h5>
            </Link>
        </form>
    )
}

export default Login