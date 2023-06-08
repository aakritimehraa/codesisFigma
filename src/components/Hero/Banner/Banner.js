import React from 'react'
import './style.css'
import mobile1 from '../../../assets/bannerMobile1.png'
import inner from '../../../assets/bannerMobileInner.png'
import mobile2 from '../../../assets/bannerMobile2.png'

function Banner() {
    return (
      <section className="banner">
        <div className="bannerLeft">
          <div className="bannerTitle">
            Welcome to the
          </div>
          <h2 className="bannerText">Unprecedented Era of <span>Real Estate Investing</span></h2>
          <p className='bannerDesc'>Lilypads uses sophisticated technologies for data-driven decisions in investing, managing, and funding commercial real estate assets</p>
           <button>Start Investing Now</button>

           <div className='info'>
               <div>
                 <span>658+</span>
                 <p>Properties Registered</p>
               </div>

               <div>
                 <span>658+</span>
                 <p>Properties Registered</p>
               </div>


               <div>
                 <span>658+</span>
                 <p>Properties Registered</p>
               </div>
           </div>
        </div>


        <div className="bannerRight">
            <div className='mobileContainer'>
            <img src={mobile1} alt='investments mobile image' />
            <img className='innerImage' src={inner} alt='investments mobile inner image' />
            </div>
            <div>
            <img src={mobile2} alt=' mobile image' />
            </div>
        </div>
      </section>
    );
  }
  

export default Banner