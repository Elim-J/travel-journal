import React from "react"
// import ReactDOM from "react-dom"
import "../css/Navbar.css"
import earthlogo from "../images/earth-logo.png"

export default function Navbar(){
    return (
        <div className="nav-container">
            <img src={earthlogo} alt="" className="nav-logo"/>
            <p className="nav-text">my travel journal.</p>
        </div>
    )
}