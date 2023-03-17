import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Home = ()=>{

    return(
        <div>
            <div className="Home-header">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    )
}

export default Home