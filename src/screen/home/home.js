import React from 'react'
import './home.css'
import imge from '../../assets/taha2.png'

import Navbar from '../../component/navbar/nav';
import About from '../about us/about';
import Work from '../Work/work';
import Contact from '../contact/contact';
import tahapdf from '../../assets/taha.pdf'

function Home() {

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

    return (  

     
    <div className="main">
    <div><Navbar/></div>

  

<div class="row">
         
         <div class="col-lg-7 col-md-7 col-sm-7">

         <div class="col-md-8 ml-md-5 text-md-left content"><p className="changecolor"><b>Hi</b></p> <h1 className="uni">i'am Taha</h1>
    
    <p className="thieduni"><b>And i am a <span class="txt-rotate"
     data-period="2000"
     data-rotate='[ "Frontend Developer","Reactjs Developer" ]'></span> </b></p>
  <a href={tahapdf}><button className="btnuni"><b>View CV</b></button></a></div>
    
       
         </div>
       
         <div class="col-lg-5 col-md-5  col-sm-5">
       

      <div className="imagedesing">
        </div>
        
       
       
       
         </div>


    </div>

    <div className="about-pagemargin"><About/></div>

    <div ><Work/></div>
     <div className="contact-pagemargin"><Contact/></div>
    </div>



            )

         

}

export default Home;
