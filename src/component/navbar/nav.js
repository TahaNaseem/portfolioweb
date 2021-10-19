import React from 'react'



import './nav.css'
function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
   <a class="navbar-brand " href="#"><b className="navbr">Portfolio</b></a>
    <button class="navbar-toggler bor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <p class="navbar-toggler-icon"></p>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">  <b>Home</b></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#about"><b>About</b></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#work"><b>Work</b></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#contact"> <b>Contact</b></a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>






</div>

    )
}


export default Navbar;
