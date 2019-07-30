import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const MenuComite = ()=> {


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
               <Link  className="nav-link"  to='/aprovar'>Aprovar Oportunidades</Link>
            </li>
            <li class="nav-item">
               <Link  className="nav-link"  to='/aprovacao'>Aprovar Soluções</Link>
            </li>
            <li class="nav-item">
               <Link  className="nav-link"  to='/dashboards'>Dashboards</Link>
            </li>
            <li class="nav-item">
            <Link  className="nav-link"  to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
   )
   
  
 }


export default MenuComite;
