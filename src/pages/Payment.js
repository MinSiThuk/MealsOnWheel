import React from "react";
import "./Payment.css"

export default function Payment() { 

    const Alert = () => {
        alert('Thankyou for your donation');
      };
    
    return(
        
        <section className="payment">            
            <div className="payment-title">
                <h3>Payment Information</h3>
            </div>

            <div className="payment-container">
                <div className="payment-form">
                    <form action="" method="">
                        <input type="text" name="number" id="number" className="payment-input" placeholder="Card number:"/>
                        <input type="text" name="number" id="number" className="payment-input" placeholder="Card holder name: "/>

                        <div className="payment-row">
                            <input type="text" name="number" id="number" className="payment-input" placeholder="Expiration Date"/>
                            <input type="text" name="number" id="number" className="payment-input" placeholder="CVV"/>                            
                        </div>

                        

                        <button onClick={Alert}>Submit</button>

                        
                    </form>
                </div>
            </div>
                            
        </section>
    )
}