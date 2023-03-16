import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { elementsStates , IGlobalContext} from "../types";
import SpinRotate from "./SpinRotate";
import useFetch from "../services/useFetch";
import useValidator from "../hooks/useValidator";
import { useGlobalContext } from "../context/appContext";

const Register = () => {
    const [user, setUser] = useState<elementsStates["iRegisterUser"]>({
        name: "",
        email: "",
        password: ""
    })
    const toHome = useNavigate()
    const { loading, registerUser } = useFetch()
    const { validationMessage, validateBody } = useValidator()
    const { dispatch } = useGlobalContext() as IGlobalContext

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // colocar validacion
            validateBody(user)
            const resp = await registerUser(user)
            dispatch<elementsStates["iAction"]>({
                type: "insertUser",
                payload: resp
            })
            window.localStorage.setItem("tokenUrl", resp.token as string)
            toHome("/urlCreation")
        } catch (error) {
            return
        }
    }

    return (
        <form className="Register-form" onSubmit={handleSubmit} name={"Form"}>
            <label htmlFor={"Form"}>Register</label>
            <div className="Register-div--mainFormData">
                <label htmlFor={"name"}>Name:</label>
                <input className="Register-input--name" name={"name"} type={"name"} placeholder={"name"} onChange={handleChange} value={user.name} />
                <label htmlFor={"email"}>Email:</label>
                <input className="Register-input--email" name={"email"} type={"email"} placeholder={"email"} onChange={handleChange} value={user.email} />
                <label htmlFor={"password"}>Password:</label>
                <input className="Register-input--password" name={"password"} onChange={handleChange} type={"password"} placeholder={"Password"} value={user.password} />
            </div>
            {loading ? <SpinRotate /> : <button className="Login-button-form" type={"submit"}>
                    Register
                </button>}
            {typeof (validationMessage) !== "boolean" ?
                <p className="Register-errorValidation">{validationMessage}</p> : null}
            <Link to="/login">
            <h5 className="Register-h5">Click here to <strong>Login</strong> </h5>
            </Link>
        </form>

    )
}

export default Register