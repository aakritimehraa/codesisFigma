import React from 'react'
import './style.css'
import about from '../../assets/about.png'
function AboutUs() {

   const aboutUsInfo = [
      {
         img:about,
         title:'Become a Data-Driven Investor',
         desc:'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
      },
      {
         img:about,
         title:'Become a Data-Driven Investor',
         desc:'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
      },
      {
         img:about,
         title:'Become a Data-Driven Investor',
         desc:'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
      },
      {
         img:about,
         title:'Become a Data-Driven Investor',
         desc:'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
      },
      {
         img:about,
         title:'Become a Data-Driven Investor',
         desc:'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
      },
      
   ]
  return (
   <section className="aboutUs">
  
   <div className="aboutItems">
     <div className="firstItem">
       <div className="aboutTitle">
         <span></span>
         <h3 className="about">About Us</h3>
       </div>
       <div className="aboutContent firstBox">
         <p className="aboutDesc ">Lillypad is the only Real Estate Investment tool you need for your business.</p>
       </div>
     </div>
     {aboutUsInfo.map((item, index) => (
       <div className="aboutItem" key={index}>
         <div className="aboutTitle">
           <img src={item.img} alt="about" />
           <h3 className="">{item.title}</h3>
         </div>
         <div className="aboutContent">
           <p className="aboutDesc">{item.desc}</p>
         </div>
       </div>
     ))}
   </div>
 </section>

    )
}

export default AboutUs