import React from "react";
import "./Membermenu.css"
import Menu1 from "../img/menu1.png"
import Menu2 from "../img/menu2.png"
import Menu3 from "../img/menu3.png"
import Menu4 from "../img/menu4.png"
import Menu5 from "../img/menu5.png"
import Menu6 from "../img/menu6.png"
import Menu7 from "../img/menu7.png"
import Menu8 from "../img/menu8.png"
import Menu9 from "../img/menu9.png"
import Menu10 from "../img/menu10.png"
import Menu11 from "../img/menu11.png"
import Menu12 from "../img/menu12.png"
import Menu13 from "../img/menu13.png"
import Menu14 from "../img/menu14.png"
import Menu15 from "../img/menu15.png"
import Menu16 from "../img/menu16.png"
import Menu17 from "../img/menu17.png"
import Menu18 from "../img/menu18.png"
import Menu19 from "../img/menu19.png"
import Menu20 from "../img/menu20.png"
import Menu21 from "../img/menu21.png"


export default function Membermenu () {
    return(
        <section className="membermenulist">
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
                            <a href="/Memberhome">profile</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="member-menus">

                <div className="member-menu-title">
                    <h3>Monday</h3>
                </div>

                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu1}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>porridge</h3>
                                <span>1st*2st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu2} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Noodle</h3>
                                <span>3st*4st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu3} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>KyayOh</h3>
                                <span>5st*6st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Tuesday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu4}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Shan</h3>
                                <span>7st*8st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu5} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Vermicelli</h3>
                                <span>9st*10st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu6} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Shan Tofu</h3>
                                <span>11st*12st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Wednesday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu7}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Porridge</h3>
                                <span>13st*14st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu8} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Soup</h3>
                                <span>15st*16st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu9} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Rice</h3>
                                <span>17st*18st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Thursday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu10}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Rice</h3>
                                <span>19st*20st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu11} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Vermicelli</h3>
                                <span>21st*22st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu12} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>RiceNoodle</h3>
                                <span>23st*24st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Friday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu13}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Dumplings</h3>
                                <span>25st*26st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu14} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>CoconutNoodle</h3>
                                <span>27st*28st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu15} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Dumplings</h3>
                                <span>29st*30st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Saturday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu16}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Dumplings</h3>
                                <span>31st*32st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu17} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>DumplingsSalad</h3>
                                <span>33st*34st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu18} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>KyarZanHin</h3>
                                <span>35st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="member-menu-title">
                    <h3>Sunday</h3>
                </div>
                  
                <div className="member-menu">                    
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu19}/>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Moo Shu</h3>
                                <span>36st*37st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu20} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>Noodle</h3>
                                <span>38st*39st</span>
                            </div>
                                
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>                            
                        </div>
                    </div>
                    <div className="member-menu-box">
                        <div className="menu-img">
                            <img src={Menu21} />
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-title">
                                <h3>ChickenRice</h3>
                                <span>40st*41st</span>
                            </div>
                            
                            <div className="menu-order-button">
                                <a href="/Menulist">Order</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}