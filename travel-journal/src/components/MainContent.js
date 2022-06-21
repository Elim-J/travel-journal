import React from "react"
// import ReactDOM from "react-dom"
import Card from "./Card.js"
import data from "../data.js"

export default function MainContent() {
    
    const cards = data.map( (data) => {
    return <Card 
            id={data.id}
            {...data}
            />
    })
    
    return (
        <div>
            {cards}
        </div>
    )
}



