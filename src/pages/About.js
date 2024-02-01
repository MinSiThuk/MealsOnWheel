import React from "react"
import "./About.css"
import img1 from '../img/member.png'
import img2 from '../img/volunteer.png'
import img3 from '../img/caregiver.png'
import img4 from '../img/partner.png'

export default function About() {
  return(
    <section id="about">
      <div className="about-title">
        <h3>About</h3>
      </div>

      <div className="about-body">

        <div className="about-section">
          <div className="about-main-img">
            <img src={img1}/>
          </div>
          <div className="about-main-text">
            <p>The primary goal of the "Meals On Wheels" project is to provide a vital and compassionate service to qualified adults who, due to age, disease, or disability, face challenges in preparing meals for themselves. The project, undertaken by Unity One Solutions, aims to ensure the nutritional well-being of these individuals by delivering hot noon meals directly to their homes</p>
          </div>
        </div>

        <div className="about-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_mINlhxT-Y?si=u1fumXFkWjgLrPmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="about-cards-container">
          <div className="about-cards">

            <div className="about-card">
              <div className="image">
                <img src={img1}/>
              </div>              
              <h3>Member</h3>
              <p>Members of our Meals On Wheels community form the heart of our initiative. These are individuals who, due to age, disease, or disability, face challenges in preparing meals for themselves. Our focus is on providing them with a vital service delivering hot noon meals directly to their homes.</p>

            </div>

            <div className="about-card">
              <div className="image">
                <img src={img2}/>
              </div>
              
              <h3>Volunteer</h3>
              <p>Our dedicated team of volunteers is the heart and soul of the "Meals On Wheels" project. Committed to making a positive impact in the lives of vulnerable individuals, our volunteers bring compassion, dedication, and a sense of community to every aspect of our initiative.</p>
              
            </div>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <div className="image">
                <img src={img3}/>
              </div>
              
              <h3>Caregiver</h3>
              <p>Caregivers are an integral part of our "Meals On Wheels" community, playing a crucial role in ensuring the well-being of our members. These dedicated individuals provide essential support to those facing challenges in preparing meals due to age, disease, or disability.</p>
            </div>

            <div className="about-card">
              <div className="image">
                <img src={img4}/>
              </div>
              
              <h3>Partner</h3>
              <p>Our partners are vital collaborators in the "Meals On Wheels" project, playing a key role in our mission to deliver hot noon meals to individuals facing challenges in preparing food. These partners, which include food service providers across the country, work in tandem with us to ensure efficient meal preparation and timely delivery.</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
