
import React from "react";
import './work.css'


import mi1 from '../../assets/1.jpg'
import mi2 from '../../assets/2.jpg'
import mi3 from '../../assets/3.jpg'
import mi4 from '../../assets/4.jpg'
import mi5 from '../../assets/5.jpg'
import mi6 from '../../assets/6.jpg'

function Work() {

  return (
    <div>

<div class="text-center" id="work">
<h1 className="ab">work</h1></div>

<div className="container">
  <div className="gallery">
    <a href={mi1} data-lightbox="model" data-title="sadas"><img src={mi1}/></a>
    <a href={mi2} data-lightbox="models" data-title="sadas"><img src={mi2}/></a>
    <a href={mi3} data-lightbox="models" data-title="sadas"><img src={mi3}/></a>
    <a href={mi4} data-lightbox="models" data-title="sadas"><img src={mi4}/></a>
    <a href={mi5} data-lightbox="models" data-title="sadas"><img src={mi5}/></a>
    <a href={mi6} data-lightbox="models" data-title="sadas"><img src={mi6}/></a>
   
  </div>
</div>

    </div>

    
  );
}
export default Work;