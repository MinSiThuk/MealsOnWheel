import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import "./Signin.css"

export default function Signin() {
    return(
      <section>
        <div className="signin">
          <div className="signin-title">
          </div>

          <div className="signin-form">
            <form action="" method="">
              <div className="row">
                <input type="text" name="name" id="name" className="signin-input" placeholder="Name" required/>
                <input type="email" name="name" id="name" className="signin-input" placeholder="Email" required/>
                <input type="password" name="password" id="password" className="signin-input" placeholder="Password" required/>               

                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sign In
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="drop-menu">
                    <Dropdown.Item href="/Memberhome" className="drop-menus" >Member</Dropdown.Item>
                    <Dropdown.Item href="/Volunteerhome" className="drop-menus" >Volunteer</Dropdown.Item>
                    <Dropdown.Item href="/Caregiverhome" className="drop-menus" >Caregiver</Dropdown.Item>
                    <Dropdown.Item href="/Partnerhome" className="drop-menus" >Partner</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>              
            </form>
          </div>
        </div>
      </section>
    )
  }
  