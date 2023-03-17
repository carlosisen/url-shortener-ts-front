import { useGlobalContext } from "../context/appContext";
import { IGlobalContext } from "../types";
import UrlDisplay from "./UrlDisplay";
import "../assets/UrlGallery.css"

const UrlGallery= ()=>{
    const {appState:{urlsData} }= useGlobalContext() as IGlobalContext

    return(
        <div className="UrlGallery-div">
                <div className="UrlGallery-div-element">URL</div>
                <div className="UrlGallery-div-element">Creation Date</div>
                <div className="UrlGallery-div-element">Update Date</div>
                <div className="UrlGallery-div-element"> Short Url</div>
                <div className="UrlGallery-div-element">Uses</div>
                <div className="UrlGallery-div-element" >notes</div>
            

            {urlsData?.map<JSX.Element>((url) : JSX.Element => {
               return <UrlDisplay data={url}/>
            })}
            {!urlsData.length && <h3>You dont create URl yet</h3>}
        </div>
    )
}

export default UrlGallery