import React from "react";
import './Topnav.css';


const TopNav = () => {


    return (
        <div className="topNav">

            <div className="logoSide">
                <div className="logo">

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-butterfly"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.176a3 3 0 1 1 -4.953 -2.449l-.025 .023a4.502 4.502 0 0 1 1.483 -8.75c1.414 0 2.675 .652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079a3 3 0 1 1 -4.983 2.25z" /><path d="M12 19v-10" /><path d="M9 3l3 2l3 -2" /></svg>

                    <h1> GoDaddy</h1>

                </div>


                <div className="logoList">
                    <ul>

                        <li>Domain Names</li>
                        <li>Websites & Hosting</li>
                        <li>Commerce</li>
                        <li>Email & Marketing </li>
                        <li>Expert Services</li>
                        <li> More </li>
                    </ul>
                </div>
            </div>


            <div className="rightSide">
                <h4>Help Center</h4>


                <div className="signIn">
                    <select>
                        <option value="signIn">Sign in</option>
                        <option value="LogIn">Log in</option>
                    </select>

                </div>


                <div className="shop">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                </div>
            </div>



        </div>
    )



}


export default TopNav
