import { Outlet } from "react-router-dom"

const Home = ()=>{

    return(
        <div>
            <h1>Estas en Home</h1>
            <Outlet/>
        </div>
    )
}

export default Home