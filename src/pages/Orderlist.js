import React from "react";
import "./Orderlist.css"

export default function Orderlist () {
    return(
        <section className="orderlist">
            
                <div className="nav-list">
                    <nav>
                        <ul>                            
                            <li>
                                <a href="/Orderlist">Order Lists</a>
                            </li>
                            <li>
                                <a href="/Partnerhome">profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="orderlist-table">
                    <table border=""   >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Menu</th>
                                <th>Distance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>orders</td>
                                <td>KFC</td>
                                <td>10km</td>
                            </tr>
                            <tr>
                                <td>orders</td>
                                <td>KFC</td>
                                <td>20km</td>
                            </tr>
                            <tr>
                                <td>orders</td>
                                <td>KFC</td>
                                <td>15km</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
        </section>
    )
}
