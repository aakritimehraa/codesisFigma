import React from 'react'
import './style.css'
import facebook from '../../assets/Facebook.png'
import logo from '../../assets/logo.svg'
function Footer() {
    return (
        <footer className='footer'>
            <div className='footerContent'>
                <div className='footerLeft'>
                    <div className="emailInput">
                        <input type="text" />
                        <button className="submitBtn">Subscribe To NewsLetter</button>
                    </div>

                    <p className='footerText'>Signup and start enjoying the benifits<br></br> today!</p>

                    <button className='signup'>Sign Up to Lilypads</button>

                    <div className='socialMedia'>
                        <img src={facebook} alt='facebook' />
                        <img src={facebook} alt='facebook' />
                        <img src={facebook} alt='facebook' />
                        <img src={facebook} alt='facebook' />
                        <img src={facebook} alt='facebook' />
                        <img src={facebook} alt='facebook' />


                    </div>
                </div>
                <div className='footerRight'>
                    <div className='footerRightRow1'>
                        <div className='column'>
                            <div>
                            <img src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='column'>
                            <h4>Reach us at</h4>
                            <p>6751 Columbia Gateway Dr.,

                                3rd floor, Columbia,

                                MD 21046</p>
                        </div>
                    </div>
                    <div className='footerRightRow2'>
                        <div className='column'>
                            <ul>
                                <li className='heading'>Network</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul>

                        </div>
                        <div className='column'>
                        <ul>
                                <li className='heading'>Product</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul>
                        </div>
                        <div className='column'>
                        <ul>
                                <li className='heading'>Our Story</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerRightRow3'>
                        <div className='column'>
                        <ul>
                                <li className='heading'>Technology</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul>
                        </div>
                        <div className='column'>       <ul>
                                <li className='heading'>Highlights</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul></div>
                        <div className='column'>
                        <ul>
                                <li className='heading'>Knowledge Center</li>
                                <li>Community</li>
                                <li>Investor</li>
                                <li>Broker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer