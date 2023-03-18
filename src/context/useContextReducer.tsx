
import { useReducer } from "react"
import { IappStates, elementsStates} from "../types"

const initialGlobalState : IappStates= {
    user: null ,
    urlsData: [],
}


const globalStateReducer = (state : IappStates, action: elementsStates["iAction"] ) : IappStates =>{
    switch (action.type){
        case "clear":
            return {
                ...initialGlobalState
            }
        case "insertUrls":
            return{
                ...state,
                urlsData : [...state.urlsData, ...action.payload as elementsStates["iUrl"][] ]
            }
        case "insertUser":
            return{
                ...state,
                user: action.payload as elementsStates["iUser"]
        }
        case "handleUrls":
            const stateUrl : IappStates["urlsData"] = state.urlsData.map((url) => url._id === action.payload.elementID ? { ...url, [action.payload.inputName]: action.payload.inputValue }: url) 
            return{
                ...state,
                urlsData: stateUrl
        }
        case "handleUser":
            return{
                ...state,
                user: { ...state.user as elementsStates["iUser"], [action.payload.inputName]: action.payload.inputValue }
        }
        case "updateUrl":
            return{
                ...state,
                urlsData: action.payload
            }
    }
} 

const useContextReducer = ()=>{
    return useReducer(globalStateReducer, initialGlobalState)
}
export default useContextReducer
