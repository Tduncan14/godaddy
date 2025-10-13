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


                    <div className="upperFooterStates">

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
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg></li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></li>
                                <li> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg></li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg></li>
                            </ul>


                        </div>

                    </div>

                    {/* end of the upperFooter */}

                    <hr className="midline" />

                    {/* end of the hr */}


                    <div className="lowerFooterStates">
                        <div className="lowerLeft">

                            <p>Copyright &copy;1999-2025 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is registered trademark of GoDaddy Operating Company. LLC in the US and other countries. The *GO* logo is registered trademark of GoDaddy.com, LLC in the US.</p>


                            <p>Use of this Site is subject to express terms of use. By using this site. you signify that you agree to be bound by these <span className="specialPara">Universal Terms of Service </span></p>
                        </div>


                        <div className="lowerRight">
                            <ul>
                                <li>Legal</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>

                            <p>Do no sell my personal information</p>


                        </div>

                    </div>


                </div>

            </div>






        </div>
    )
}


export default FooterContent