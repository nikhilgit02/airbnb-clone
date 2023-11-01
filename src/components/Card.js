import React from "react";
import star from "../Star 1.png"

export default function Card(props){
    return(
        <section>
            <div className="card-base">
                <img src={`images/${props.img}`} className="card-main-image"/>
                <div className="rating">
                <img src={star} className="star-img"/>
                <p>{props.rating} ({props.reviewCount}) . {props.country}</p>
                </div>
                <p className="card-details">{props.title}</p>
                <p className="card-details"><b>From ${props.price} </b>/ person</p>
            </div>
        </section>
    )
}