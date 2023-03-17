import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/appContext";
import useFetch from "../services/useFetch";
import { IGlobalContext, elementsStates } from "../types";
import "../assets/Navbar.css"


const Navbar= ()=>{
    const { loading, getAllUrl } = useFetch()
    const { dispatch, appState: { urlsData } } = useGlobalContext() as IGlobalContext
    const toLogin= useNavigate()

    const handleLogout= ()=>{
        dispatch({type: "clear"});
        toLogin("/login")
    }

    const fetchingUrl = async () => {
            if (urlsData.length > 0) {
                console.log(urlsData)
                return
            }
            try {
                const resp = await getAllUrl()
                if (resp) {
                    dispatch<elementsStates["iAction"]>({
                        type: "insertUrls",
                        payload: resp
                    })
                }
            } catch (error) {
                console.log(error)}
        };

    return (
        <div className="Navbar-div">
            <Link to="/urlCreation" className="Navbar-link">
                <h3 className="Navbar-h3">Create URl</h3>
            </Link>
            <Link to="/allurl" className="Navbar-link" onClick={fetchingUrl}>
                <h3 className="Navbar-h3">Your URL</h3>
            </Link>
            <div className="Navbar-link" onClick={handleLogout}>
                <h3 className="Navbar-h3">LogOut</h3>
            </div>
        </div>
    )
}

export default Navbar