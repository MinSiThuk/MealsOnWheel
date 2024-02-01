import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import Signin from "./pages/Signin"
import Payment from "./pages/Payment"
import Membersignup from "./pages/Membersignup"
import Volunteersignup from "./pages/Volunteersignup"
import Caregiversignup from "./pages/Caregiversignup"
import Partnersignup from "./pages/Partnersignup"
import Memberhome from "./pages/Memberhome"
import Volunteerlist from "./pages/Volunteerlist"
import Membermenu from "./pages/Membermenu"
import Menulist from "./pages/Menulist"
import Volunteerhome from "./pages/Volunteerhome"
import Partnerlist from "./pages/Partnerlist"
import Memberlist from "./pages/Memberlist"
import Caregiverhome from "./pages/Caregiverhome"
import Carememberlist from "./pages/Carememberlist"
import Partnerhome from "./pages/Partnerhome"
import Orderlist from "./pages/Orderlist"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <>

      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/membersignup" element={<Membersignup />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/volunteersignup" element={<Volunteersignup/>} />
          <Route path="/caregiversignup" element={<Caregiversignup/>} />
          <Route path="/partnersignup" element={<Partnersignup/>} />
          <Route path="/memberhome" element={<Memberhome/>} />
          <Route path="/volunteerlist" element={<Volunteerlist/>} />
          <Route path="/membermenu" element={<Membermenu/>} />
          <Route path="/menulist" element={<Menulist/>} />
          <Route path="/volunteerhome" element={<Volunteerhome/>} />
          <Route path="/partnerlist" element={<Partnerlist/>} />
          <Route path="/memberlist" element={<Memberlist/>} />
          <Route path="/caregiverhome" element={<Caregiverhome/>} />
          <Route path="/carememberlist" element={<Carememberlist/>} />
          <Route path="/partnerhome" element={<Partnerhome/>} />
          <Route path="/orderlist" element={<Orderlist/>} />

        </Routes>
        
      </div>

      <Footer/>
      
      
      
    </>
    
  )
}

export default App
