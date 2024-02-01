import React from "react"
import './Home.css'
import Home1 from '../img/member.png'
import Home2 from '../img/volunteer.png'
import Home3 from '../img/caregiver.png'
import Home4 from '../img/partner.png'
    
export default function Home() {
  return(
    <section className="Home">
            <div className="Home-Title">
                <h1>Welcome To Meal On Wheels</h1>
            </div>
            <div className="Home-content">
                <div className="Home-container">
                    <div className="Home-card">
                        <div className="Home-card-img">
                            <img src={Home1} alt="Home Image"/>
                        </div>
                        <div className="Home-card-content">
                            <h2>Member</h2>
                            <p>Dear Member, We hope you are healthy and happy when you receive this letter. We wanted to take a moment to mention how grateful we are for your ongoing help and Meals on Wheels membership. Never hesitate to contact us if you have any inquiries or recommendations.</p>
                            <a href="/Membersignup" className="button">Sign Up</a>
                        </div>
                    </div>

                    <div className="Home-card">                        
                        <div className="Home-card-content">
                            <h2>Volunteer</h2>
                            <p>By volunteering, you contribute to our recipients' feeling of belonging and community. You create relationships that fight loneliness and isolation through your chats, smiles, and sincere concern.</p>
                            <a href="/Volunteersignup" className="button">Sign Up</a>
                        </div>
                        <div className="Home-card-img">
                            <img src={Home2} alt="Home Image"/>
                        </div>
                    </div>

                    <div className="Home-card">
                        <div className="Home-card-img">
                            <img src={Home3} alt="Home Image"/>
                        </div>
                        <div className="Home-card-content">
                            <h2>Care Givers</h2>
                            <p>Carergivers check their client's wellbeing while performing safety checks during appointments. The Meals on Wheels organisation or the appropriate authorities can be notified if there are any alarming changes in a recipient's health or living circumstances.</p>
                            <a href="/Caregiversignup" className="button">Sign Up</a>
                        </div>
                    </div>

                    <div className="Home-card">                        
                        <div className="Home-card-content">
                            <h2>Partner</h2>
                            <p>Partners of Meals on Wheels are institutions, corporations, government organisations, and community associations that work with Meals on Wheels programmes to further their goal of providing older adults and individuals who have disabilities in their communities with nutritious meals and companionship. These partnerships play a crucial role in the efficient service delivery of Meals on Wheels programmes.</p>
                            <a href="/Partnersignup" className="button">Sign Up</a>
                        </div>
                        <div className="Home-card-img">
                            <img src={Home4} alt="Home Image"/>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
  )
}
