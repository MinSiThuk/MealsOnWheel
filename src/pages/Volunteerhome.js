import React from "react";
import "./Volunteerhome.css"
import Memhome1 from "../img/img1.jpg"

export default function Volunteerhome () {
    return(
        <section className="volunteerhome">
            <div className="volunteerhome-nav">
                <nav>
                    <ul>
                        <li>
                            <a href="/Partnerlist">View Partners</a>
                        </li>
                        <li>
                            <a href="/Memberlist">View Members</a>
                        </li>
                        <li>
                            <a href="/Volunteerhome">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="volunteerhome-container">
                <div className="volunteerhome-box">
                    <div className="volunteerhome-profile">
                        <img src={Memhome1}/>
                    </div>
                    <div className="volunteerhome-form">                       

                        <p>Dear Member, We hope you are healthy and happy when you receive this letter. We wanted to take a moment to mention how grateful we are for your ongoing help and Meals on Wheels membership. Never hesitate to contact us if you have any inquiries or recommendations.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}