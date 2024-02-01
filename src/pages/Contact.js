import React from "react"
import "./Contact.css"



export default function Contact() {
    return(
      <div className="contact">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-container">

          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.7826500010306!2d96.10643452585718!3d21.992444526508056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d58668ae3c3%3A0x8633344fb935b932!2z4YCh4YCb4YC-4YCx4YC34YCY4YCA4YC64YCU4YCU4YC64YC44YCZ4YC84YCt4YCv4YC34YCb4YCt4YCv4YC4!5e1!3m2!1sen!2smm!4v1696835370839!5m2!1sen!2smm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="contact-body">
            <div className="contact-text">
              <p>The primary goal of the "Meals On Wheels" project is to provide a vital and compassionate service to qualified adults who, due to age, disease, or disability, face challenges in preparing meals for themselves. The project, undertaken by Unity One Solutions, aims to ensure the nutritional well-being of these individuals by delivering hot noon meals directly to their homes</p>
            </div>

            <div className="contact-form">
                <div className="contact-wrapper">
                  <li><a href="#"><i class="fa-solid fa-location-dot"></i>Myanmar,Mandalay,81st</a></li>
                  <li><a href=""><i class="fa-solid fa-phone"></i>+959 123 456 789</a></li>
                  
                </div>

                <div className="contact-wrapper">
                  <li><a href="mailto: yeyintaung638864@gmail.com"><i class="fa-solid fa-envelope"></i>yeyintaung638864@gmail</a></li>
                  <li><a href="#"><i class="fa-brands fa-chrome"></i>Website</a></li>
                  
                </div>
            </div>          
          </div>
          
        </div>  
      </div>
      
      
    ) 
  }
  