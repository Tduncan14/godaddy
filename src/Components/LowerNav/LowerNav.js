import React from 'react'
import './LowerNav.css';


const LowerNav = () => {





    return (
        <div className="lowerNav">

            <div className="searchArea">

                <input type="input" value="Type the domain you want" />

                <button className="sDomain"> Search Domain</button>

            </div>


            <div className="stockList">

                <ul className="stockysL">
                    <li><h5>online</h5> <p>$0.99</p></li>
                    <li> <h5>.net</h5> <p>$14.99</p></li>
                    <li><h5>.inc</h5> <p>$999.99</p></li>
                    <li><h5>Me</h5> <p>$11.99</p></li>
                </ul>

            </div>
        </div>
    )
}


export default LowerNav