import React from "react";
import img from "../Group 77.png"
export default function StaticMain(){
    return(
        <div>
            <div className="main-content-img">
                <img src={img}/>
            </div>
            <div className="main-content-text">
                <h1>Online Experience</h1>
                <p>Join unique interactive activities led by<br></br>
                     one-of-a-kind hosts—all without leaving<br></br>
                     home.
                </p>
            </div>
        </div>
    )
}