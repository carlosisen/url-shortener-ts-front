import { useGlobalContext } from "../context/appContext"
import { Navigate, useLocation } from "react-router-dom"
import { IGlobalContext } from "../types"
import { JsxElement } from "typescript"

interface props {
    children: React.ReactNode  
}

const ProtectedRoute = ({ children} : props) : JSX.Element => {
    const {appState:{user}} = useGlobalContext() as IGlobalContext
    const location = useLocation()

    if (user === null ){ return <Navigate to="/login" state={{ location }} />}

    return children as JSX.Element
}

export default ProtectedRoute