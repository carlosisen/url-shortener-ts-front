import { elementsStates } from "../types"
import "../assets/UrlDisplay.css"

interface props {
    data: elementsStates["iUrl"]
}

const UrlDisplay = ({data}: props )=>{
    const creationDate = new Date(data.createdAt).toLocaleString("es-ES", { timeZone: 'UTC' })
    const updateDate = new Date(data.updatedAt).toLocaleString("es-ES", { timeZone: 'UTC' })

    const handleCopy= () =>{
        navigator.clipboard.writeText(`${process.env.REACT_APP_BASE_REDIRECT_URL}${data._id}`)
    }

    return(
        <>
                <div className="UrlDisplay-div-element">{data.url}</div>
                <div className="UrlDisplay-div-element">{creationDate}</div>
                <div className="UrlDisplay-div-element">{updateDate}</div>
            <div className="UrlDisplay-div-element">
                    <a  href={`${process.env.REACT_APP_BASE_REDIRECT_URL}${data._id}`} >{`${process.env.REACT_APP_BASE_REDIRECT_URL}${data._id}`}</a>  
                    <button onClick={handleCopy} className="UrlDisplay-button">Copy</button>
                </div>
                <div className="UrlDisplay-div-element">{data.uses}</div>
                <div className="UrlDisplay-div-element" >{data.notes}</div>
        </>
        
    )

}

export default UrlDisplay