import React from "react"
import star from "../Star 1.png"


export default function Card(props){

    let badgeText
    if (props.card.openSpots === 0){
        badgeText ="SOLD OUT"
    } else if (props.card.location === "Online"){
        badgeText ="ONLINE"
    }
    return(
            <div className="card-base">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`images/${props.card.coverImg}`} className="card-main-image"/>
                <div className="rating">
                <img src={star} className="star-img"/>
                <p>{props.card.stats.rating} ({props.card.stats.reviewCount}) . {props.card.location}</p>
                </div>
                <p className="card-details">{props.card.title}</p>
                <p className="card-details"><b>From ${props.card.price} </b>/ person</p>
            </div>
    )
}