import React from "react";
import "./Memberhome.css"
import Memhome1 from "../img/img1.jpg"

export default function Membersignup () {
    return(
        <section className="memberhome">
            <div className="nav-list">
                <nav>
                    <ul>
                        <li>
                            <a href="/Membermenu">Menu</a>
                        </li>
                        <li>
                            <a href="/Volunteerlist">View Volunteers</a>
                        </li>
                        <li>
                            <a href="/Carememberlist">View Caregiverlist</a>
                        </li>
                        <li>
                            <a href="/Caregiverhome">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="memberhome-container">
                <div className="memberhome-box">
                    <div className="memberhome-profile">
                        <img src={Memhome1}/>
                    </div>
                    <div className="memberhome-form">
                       <p>Dear Member, We hope you are healthy and happy when you receive this letter. We wanted to take a moment to mention how grateful we are for your ongoing help and Meals on Wheels membership. Never hesitate to contact us if you have any inquiries or recommendations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}