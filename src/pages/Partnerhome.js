import React from "react";
import "./Partnerhome.css"
import Memhome1 from "../img/img1.jpg"

export default function Partnerhome () {
    return(
         <section className="partnerhome">
            <div className="nav-list">
                <nav>
                    <ul>
                        <li>
                            <a href="/Partnerhome">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="partnerhome-container">
                <div className="partnerhome-box">
                    <div className="partnerhome-profile">
                        <img src={Memhome1}/>
                    </div>
                    <div className="partnerhome-form">                        
                        <p>Partners of Meals on Wheels are institutions, corporations, government organisations, and community associations that work with Meals on Wheels programmes to further their goal of providing older adults and individuals who have disabilities in their communities with nutritious meals and companionship. These partnerships play a crucial role in the efficient service delivery of Meals on Wheels programmes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}