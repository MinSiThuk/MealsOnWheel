import React from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "./Donate.css"

export default function Donate() {
    return(
      <section>
        <div className="donate">
          <div className="donate-title">
            <h3>Donate</h3>
          </div>

          <div className="donate-container">
            <div className="donate-form">

              <form action="" method="">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="donate-groups" >
                  <div className="donate-group-1">
                    <ToggleButton id="tbg-radio-1" value={1} className="donate-price">
                      10$ 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} className="donate-price">
                      15$
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} className="donate-price">
                      20$
                    </ToggleButton>
                  </div>
                  
                  <div className="donate-group-2">
                    <ToggleButton id="tbg-radio-4" value={4} className="donate-price" >
                      50$
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-5" value={5} className="donate-price">
                      80$
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-6" value={6} className="donate-price">
                      100$
                    </ToggleButton>
                  </div>
                  
                </ToggleButtonGroup>

                <div className="other-price">
                  <label className="other">$</label>
                  <input type="text" name="number" id="number"/>
                </div>

                <a href="/Payment" className="donate-submit">Next</a>

              </form>

            </div>
          </div>
        </div>
      </section>
    )
  }
  