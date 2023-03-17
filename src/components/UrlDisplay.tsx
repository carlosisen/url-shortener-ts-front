import { elementsStates } from "../types"

interface props {
    data: elementsStates["iUrl"]
}

const UrlDisplay = ({data}: props )=>{
    const creationDate = new Date(data.createdAt).toLocaleString("es-ES", { timeZone: 'UTC' })
    const updateDate = new Date(data.updatedAt).toLocaleString("es-ES", { timeZone: 'UTC' })

    return(
        <div className="UrlDisplay-div" key={data._id}>
            <input type="text" readOnly value={data.url}/>
            <input type="text" readOnly value={creationDate}/>
            <input type="text" readOnly value={updateDate}/>
            <input type="url" readOnly value={`${process.env.REACT_APP_BASE_REDIRECT_URL}${data._id}`}/>
            <input type="text" readOnly value={data.uses}/>
            <textarea value={data.notes}>
            </textarea>
        </div>
    )

}

export default UrlDisplay