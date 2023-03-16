import { useState } from "react";
import { elementsStates, IGlobalContext } from "../types";
import { useGlobalContext } from "../context/appContext";
import SpinRotate from "./SpinRotate";
import useFetch from "../services/useFetch";
import useValidator from "../hooks/useValidator";

const UrlForm= ()=>{
    const [url, setUrl] = useState<elementsStates["iRegisterUrl"]>({
        url: "",
        notes: "",
    })
    const { loading, registerUrl } = useFetch()
    const { validationMessage, validateBody } = useValidator()
    const { dispatch } = useGlobalContext() as IGlobalContext


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl({
            ...url,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            validateBody(url)
            const resp = await registerUrl(url) as elementsStates["iUrl"]
            dispatch<elementsStates["iAction"]>({
                type: "insertUrls",
                payload: resp
            })
        } catch (error) {
            return
        }
    }

    return (
        <form className="UrlForm-form" onSubmit={handleSubmit} name={"Form"}>
            <label htmlFor={"Form"}>UrlForm</label>
            <div className="UrlForm-div--mainFormData">
                <label className="UrlForm-label" htmlFor={"url"}>url:</label>
                <input className="UrlForm-input" name={"url"} type={"url"} placeholder={"url"} onChange={handleChange} value={url.url} />
                <label className="UrlForm-label" htmlFor={"notes"}>notes:</label>
                <input className="UrlForm-input" name={"notes"} onChange={handleChange} type={"notes"} placeholder={"comments"} value={url.notes} />
            </div>
            {loading ? <SpinRotate /> : <button className="UrlForm-button-form" type={"submit"}>UrlForm</button>}
            {typeof (validationMessage) !== "boolean" ?
                <p className="UrlForm-errorValidation">{validationMessage}</p> : null}
        </form>
    )
}

export default UrlForm