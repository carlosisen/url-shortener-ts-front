import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Home = ()=>{

    return(
        <div className="Home-div">
            <div className="Home-header">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    )
}

export default Home