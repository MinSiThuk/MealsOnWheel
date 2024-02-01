import React, { Component } from 'react';
import '../pages/Menulist.css';



export class Menulist extends Component {
    constructor(props) {
        super(props);
        this.state = {
          successMessage: '', // Initialize the success message state
          address: '',
        };
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const { address } = this.state;
    
        const myitkyinaLocation = {
          latitude: 25.383,
          longitude: 97.400,
        };
    
        // Check if the address is within Myitkyina city
        if (this.isWithinMyitkyinaCity(address, myitkyinaLocation)) {
          this.setState({
            successMessage: 'Your order is available on hot meals  and has been placed successfully.',
          });
        } else {
          this.setState({
            successMessage: 'Your order is available on frozen because your location is not available in hot meals',
          });
        }
    
        // Set a timer to clear the success message after 7 seconds
        setTimeout(() => {
          this.setState({ successMessage: '' });
        }, 7000);
      };
    
      isWithinMyitkyinaCity = (address, location) => {
        // Here, you can compare the provided address with a list of Myitkyina city addresses or use a geospatial calculation to determine if it's within the city.
        // For simplicity, you can check if the address contains "Myitkyina" (case-insensitive) as a part of the address.
        const normalizedAddress = address.toLowerCase();
        return normalizedAddress.includes('myitkyina');
      };
    
      handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
      };
  render() {
    const {successMessage,address}=this.state;
    return (
        <section className="menu-list">
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
                        <a href="/Memberhome">Profile</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="menu-list-form">
            <form action="" onSubmit={this.handleSubmit} method="">
                <div className="list-row">
                    <input type="text" name="name" id="name"  className="menulist-input" placeholder="Customer Name"/>
                    <input type="text" name="address" id="location"
                    value={address}
                    onChange={this.handleAddressChange}
                    required 
                     className="menulist-input" placeholder="Customer Location"/>
                </div>
                <div className="list-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6507.475128579918!2d96.08551252200127!3d21.98283808422421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d217dcea93d%3A0x3e2d113c94a9b221!2sMandalay%20Railway%20Station!5e1!3m2!1sen!2smm!4v1697098375562!5m2!1sen!2smm" width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
               
                <button className="menu-list-btn">Order</button>
               
            </form>
            {/* Display the success message if it exists */}
          {successMessage && <div className="success-alert">{successMessage}</div>}
        </div>
   </section>
    )
  }
}

export default Menulist