import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{



   return (
  

    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <Link className="navbar-brand"  to='/'><img src="https://raw.githubusercontent.com/Wilkor/BigBets/master/home/img/Bis-Bets-Roxo.png" width="100"/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link className="navbar-brand"  to='/'>Home</Link>
                <span class="sr-only">(current)</span>
            </li>
        
            <li class="nav-item">
               <Link  className="nav-link"  to='/regulamento'>Como Funciona</Link>
            </li>
            <li class="nav-item">
       
               <Link  className="nav-link"  to='/missao'>Missão</Link>
            </li>
               <li class="nav-item">
       
               <Link  className="nav-link"  to='/sobre'>Sobre Nós</Link>
            </li>
            <li class="nav-item">
             <Link  className="nav-link"  to='/faleconosco'>Fale Conosco</Link>
            </li>

            <li class="nav-item">
            <Link  className="nav-link"  to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
   )
 
}

export default Menu;