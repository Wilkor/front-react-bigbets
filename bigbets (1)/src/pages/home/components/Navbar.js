import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  Menu  from './Menu';
import  MenuLogado  from './MenuLogado';
import  MenuComite  from './MenuComite';
import decode from 'jwt-decode';

class Navbar extends Component {

constructor(props){

  super(props)
}

 render(props){

   if(!!localStorage.getItem('@bigbets:token')){

   const token = localStorage.getItem('@bigbets:token')
   let tokenDecode = decode(token)

   }

    return (
 
    <>
            {


        
          this.props.getLogin() && tokenDecode.perfil=="Comite"?<MenuComite/>:this.props.getLogin() && tokenDecode.perfil!="Colaborador"?<MenuLogado/>:<Menu/>
            
            }
       
  </>

          )
 }
}
export default Navbar;