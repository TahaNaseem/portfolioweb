import React from 'react'
import './contact.css'
import loc from '../../assets/loc.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import fb from '../../assets/fb.png'
import git from '../../assets/git.png'
function Contact() {

    function Sub() {

      

      if (document.getElementById("blank").value==('')) {
        document.getElementById("blank").style.backgroundColor =  "red" ;
          alert("please fill up")
        
          return false;

      } 
    
      if (document.getElementById("blank2").value==('')) {
        document.getElementById("blank2").style.backgroundColor =  "red" ;
          alert("please fill up")

          return false;

      } 
       
      else{
          alert("Thank you")
      }
  
            
    }
    

    return(
<div className="bg" id="contact">
    
<div class="text-center" id="work">
<h1 className="ab">contact</h1></div>




<div className="maincontain">



<div class="row">
    <div class="col-lg-7 col-md-7 col-sm-7">
<div className="contactinput">
    <input type="text" placeholder="Your Name" id="blank" className="inpu"/>
    <br/>
    <input type="text" placeholder="Your Email" id="blank2" className="inpu2"/>
    <br/>
    <textarea class="form-control" row="5" id="comment" id="blank3" placeholder="comment" className="inpu3"/>
  <br/>  <button className="sub" onClick={Sub}>Submit</button>
</div>

    </div>

    <div class="col-lg-5 col-md-5 col-sm-5">


    <div class="seconconatct">
      
      <h3 className="get">Getting in touch is easy !</h3>

     <p className="i1"><img src={loc} className="locicon"/>M 553 ghaziabad orangi town karachi</p>
     
     <p className="i1"><img src={phone} className="locicon"/>0345-3258004</p>
     <p className="i1"><img src={email} className="locicon"/>ttahanaseem@gmail.com</p>
  
        </div>

       <a href="https://github.com/TahaNaseem"><img src={fb} className="fbicon"/></a>
       <a href="https://www.facebook.com/taha.ansari.31521"> <img src={git} className="giticon"/></a>

    </div>

    

    </div>


</div>



</div>
    );
}

export default Contact;
