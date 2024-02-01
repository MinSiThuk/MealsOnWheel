import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./pages/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
          <div className="footer-logo">
                <Link to="/" className="site-title">
                    Meals on Wheel
                </Link>
            </div>


            <div className="footer-icon">
            <ul>
                <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
          
          <div className="footer-menu">
            <h3>Contact Us</h3>        
            <CustomLink to="/about" className="footer-link">About</CustomLink>
            <CustomLink to="/contact" className="footer-link">Contact</CustomLink>        
          </div>

          
      </div>
        
      <div className="footer-2">
          <p>Copyright 2023 &copy;Made by Web Wizards</p>
      </div>
    </div>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
