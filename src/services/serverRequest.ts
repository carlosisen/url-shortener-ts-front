import axios from "axios"
import { elementsStates } from "../types"

const token = window.localStorage.getItem("tokenUrl")

const serverReq={
    url : process.env.REACT_APP_BASE_URL,
    token: window.localStorage.getItem("tokenUrl"),
    async registerUser(body: elementsStates["iRegisterUser"]){
        return await axios.post(`${this.url}/chainsawurl/create/user`, body)
    },
    async registerUrl(body: elementsStates["iRegisterUrl"]){
        return await axios.post(`${this.url}/chainsawurl/url/create?token=${token}`, body)
    },
    async loginUser(body: elementsStates["iLoginUser"]){
        return await axios.post(`${this.url}/chainsawurl/login`, body)
    },
    async getAllUrl(){
        return await axios.get(`${this.url}/chainsawurl/url/getAll?token=${token}`)
    },

    

}

export default serverReq