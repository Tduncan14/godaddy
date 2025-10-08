import React from 'react'
import './FooterContent.css';


const FooterContent = () => {










    return (
        <div className="footer">
            <div className="upperFooter">

                <div className="leftFooter">
                    <h1>Sign up for news and special offers</h1>

                    <div className="leftfooterButton">
                        <input type="input" placeholder='Email address' />
                        <button className="footerSignup">Sign Up</button>
                    </div>

                </div>


                <div className="rightFooter">
                    <h1>We love taking your call.</h1>

                </div>

            </div>
            <hr />
            {/* upperFooter */}

            {/* midfooter */}

            <div className="midFooter">
                <div className="list">


                    <ul className="footList">
                        <li className="titleName">About GoDaddy</li>
                        <li>About  Us</li>
                        <li>Investor Relations</li>
                        <li>Careers</li>
                        <li>Corporate Responsiblity</li>
                        <li>Trust Center</li>
                    </ul>


                    <ul className="footList">
                        <li className="titleName">Help Center</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Verture Forward:Microbusiness Data</li>
                        <li>GoDaddy Blog</li>
                        <li>Contact Us</li>
                        <li>Report Abuse</li>
                        <li>Resources</li>
                    </ul>



                    <ul className="footList">
                        <li className="titleName">Webmail</li>
                        <li>WHOIS</li>
                        <li>GoDaddy Mobile App</li>
                        <li>ICANN  Confirmation</li>
                        <li>Designers & Developers </li>
                        <li>Corporate Domains</li>
                        <li>Redeem Code</li>
                        <li>Product Catalog</li>
                        <li>Videos</li>
                        <li>Business Name Generator</li>
                    </ul>



                    <ul className="footList">
                        <li className="titleName">Partner Program</li>
                        <li>Affliates </li>
                        <li>Reseller Programs</li>
                        <li>GoDaddy Pro</li>

                    </ul>



                    <ul className="footList">
                        <li className="titleName">Account</li>
                        <li>My Products</li>
                        <li>Renewals & Billing</li>
                        <li>Create Account</li>
                    </ul>

                    <ul className="footList">
                        <li className="titleName">Shopping</li>
                        <li>Buy a Domain</li>
                        <li>Websites</li>
                        <li>WordPress</li>
                        <li>Hosting</li>
                        <li>Web security</li>
                        <li>Email & Office</li>
                        <li>Phone Numbers</li>
                        <li>Promos</li>
                    </ul>
                </div>

                <div className="FooterStates">

                    <div className="FooterLeftStates">
                        <div className="Logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-butterfly"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18.176a3 3 0 1 1 -4.953 -2.449l-.025 .023a4.502 4.502 0 0 1 1.483 -8.75c1.414 0 2.675 .652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079a3 3 0 1 1 -4.983 2.25z" /><path d="M12 19v-10" /><path d="M9 3l3 2l3 -2" /></svg>

                            <h1> GoDaddy</h1>
                        </div>

                        <div className="inputsLang">
                            <label for="language">United States</label>

                            <select name="Lang" id="language">
                                <option value="English">English</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Spanish">Spanish</option>

                            </select>

                        </div>

                        {/* this is the currency */}


                        <div className="inputsCurrency">
                            <label for="Currency">United States</label>

                            <select name="money" id="Currency">
                                <option value="USD">USD</option>
                                <option value="YEN">YEN</option>
                                <option value="YAUN">Yaun</option>
                            </select>

                        </div>

                    </div>


                    <div className="FooterRightStates">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <hr className="midline" />
                </div>
            </div>
            {/* end of with hr */}





        </div>
    )
}


export default FooterContent