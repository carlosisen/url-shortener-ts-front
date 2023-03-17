import { JsxElement } from "typescript";
import { useGlobalContext } from "../context/appContext";
import { IGlobalContext } from "../types";
import UrlDisplay from "./UrlDisplay";

const UrlGallery= ()=>{
    const {appState:{urlsData} }= useGlobalContext() as IGlobalContext

    return(
        <div className="UrlGallery-div">
            {urlsData?.map<JSX.Element>((url) : JSX.Element => {
               return <UrlDisplay data={url}/>
            })}
            {!urlsData && <h3>You dont create URl yet</h3>}
        </div>
    )
}

export default UrlGallery