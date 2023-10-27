import React from "react";
import image from "../image 12.png"
import star from "../Star 1.png"

export default function Card(){
    return(
        <section>
            <div className="card-base">
                <img src={image} className="card-main-image"/>
                <div className="rating">
                <img src={star} className="star-img"/>
                <p>5.0 (6) . USA</p>
                </div>
                <p className="card-details">Life lessons with Katie Zaferes</p>
                <p className="card-details"><b>From $136 </b>/ person</p>
            </div>
        </section>
    )
}