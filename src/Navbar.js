import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import "./pages/Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      
      <Link to="/" className="site-title">
        Meals on Wheel
      </Link>
      <ul>        
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>

        <Dropdown className="nav-dropdown">
            <Dropdown.Toggle id="dropdown-basic">
            Get Involved
            </Dropdown.Toggle>

            <Dropdown.Menu>       
              <Dropdown.Item><CustomLink to="/Membersignup">Member</CustomLink>  </Dropdown.Item>
              <Dropdown.Item><CustomLink to="/Volunteersignup">Volunteer</CustomLink></Dropdown.Item>
              <Dropdown.Item><CustomLink to="/Caregiversignup">Care Giver</CustomLink></Dropdown.Item>
              <Dropdown.Item><CustomLink to="/Partnersignup">Partner</CustomLink></Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

        <CustomLink to="/donate" className="nav-button" style={{color: 'white'}}>Donate</CustomLink>
        <CustomLink to="/signin" className="nav-button" style={{color: 'white'}}>Signin</CustomLink>
        <CustomLink to="/" className="nav-button" style={{color: 'white'}}>Signout</CustomLink>

        

      </ul>
    </nav>
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
