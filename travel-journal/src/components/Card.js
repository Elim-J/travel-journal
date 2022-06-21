import React from "react"
// import ReactDOM from "react-dom"
import "../css/Card.css"
import icon from "../images/location-icon.png"

export default function Card(props) {
    return (
        <div className="entire-card">
            <div className="card">
                <img src={props.imageUrl} alt="Mount Fuji" className="card-img"/>
            
                <div className="info-section">
                    <div className="location-maps">
                        <img src={icon} alt="" className="icon"/>
                        <p className="location">{props.location.toUpperCase()}</p>
                        <a href={props.googleMapsUrl} className="map-link">View on Google Maps</a>
                    </div>

                    <h1 className="title">{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div> 

            <hr className="hr-divider"/> 
        </div> 
     
    )
}  