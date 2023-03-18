import axios from "axios"
import { elementsStates } from "../types"


const serverReq={
    url : process.env.REACT_APP_BASE_URL,
    async registerUser(body: elementsStates["iRegisterUser"]){
        return await axios.post(`${this.url}/chainsawurl/create/user`, body)
    },
    async registerUrl(body: elementsStates["iRegisterUrl"], token: string){
        return await axios.post(`${this.url}/chainsawurl/url/create?token=${token}`, body)
    },
    async loginUser(body: elementsStates["iLoginUser"]){
        return await axios.post(`${this.url}/chainsawurl/login`, body)
    },
    async getAllUrl( token: string){
        return await axios.get(`${this.url}/chainsawurl/url/getAll?token=${token}`)
    },
    async redirect(url: string){
        return await axios.get(`${this.url}/chainsawurl/${url}`)
    }

    

}

export default serverReq