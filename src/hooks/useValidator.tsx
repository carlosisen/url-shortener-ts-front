
import { useState } from "react"; 
import { elementsStates} from "../types";
import validator from 'validator';


type Tbody = elementsStates["iLoginUser"] | elementsStates["iRegisterUrl"]| elementsStates["iRegisterUser"] | elementsStates["iUrl"]

const useValidator=()=>{
    const [validationMessage, setValidationMessage]= useState<string | boolean>("pollas")

    const validateBody= (body : Tbody) => {
        if ("name" in body){
            if (!validator.isLength(body.name, { min: 3, max: 25 })){
                setValidationMessage("name must have at least 3 charcters ")
                throw Error()
            }

        }

        if("password" in body){
            if(!validator.isLength(body.password as string , {min: 6 , max: 20})){
            setValidationMessage("password must have 6 characters at least ")
            throw Error()
            }
        }

        if("email" in body){
            if(!validator.isEmail(body.email)){
                setValidationMessage("email is not correct")
                throw Error()
            }

        }
        if("notes" in body){
            
        }
        if("url" in body){
            if(!validator.isURL(body.url)){
                setValidationMessage("url is not correct")
                throw Error()
            }
        }
    }


    return{
        validationMessage,
        validateBody
    } 

}

export default useValidator