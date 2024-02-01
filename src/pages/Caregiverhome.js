import React from "react";
import "./Caregiverhome.css"
import Memhome1 from "../img/img1.jpg"

export default function Caregiverhome () {
    return(
        <section className="caregiverhome">
            <div className="nav-list">
                <nav>
                    <ul>
                       
                        <li>
                            <a href="/Memberlist">View Members</a>
                        </li>
                        <li>
                            <a href="/Caregiverhome">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="caregiverhome-container">
                <div className="caregiverhome-box">
                    <div className="caregiverhome-profile">
                        <img src={Memhome1}/>
                    </div>
                    <div className="caregiverhome-form">                        
                       <p>Carergivers check their client's wellbeing while performing safety checks during appointments. The Meals on Wheels organisation or the appropriate authorities can be notified if there are any alarming changes in a recipient's health or living circumstances.</p>                    
                    </div>
                </div>
            </div>
        </section>
    )
}