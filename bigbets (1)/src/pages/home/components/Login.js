import React, {Component} from 'react';
import axios from 'axios';
import login from '../../../servicesAPI/loginServices'
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';

class Login extends Component{

constructor(props){

  super(props);

  this.state={

      email:'',
      password:'',
  
  }
    

 }


 async handleClick(event){
   event.preventDefault();

   const logged =  await login(this.state.email,this.state.password)
     .then(response =>{
       console.log("teste -res ",response)
       return response
      
     })

    if(logged==400){

      document.getElementById("modal").click();
    }
     

    this.props.setNewState(logged)

 }

 renderLoginForm(){




   return (

  <>
     <div className="container">
    <br/>
     <div className="container pt-3">
    <div className="row justify-content-sm-center">
      <div className="col-sm-6 col-md-4">
        <div className="card border-info text-center">
          <div className="card-header">
            BigBets - login {this.state.loggedInUser}
          </div>
          <div className="card-body">
            <img className="mr-3"
              src="" width="10%"
              alt=""/>
            <br/><br/>
            <form className="form-signin">
              <input type="text" id="email" onChange = {(event) => this.setState({email:event.target.value})} className="form-control mb-2" placeholder="Endereço de email" required autofocus/>
              <input  type="password" onChange = {(event) => this.setState({password:event.target.value})}  className="form-control mb-2" placeholder="Senha" required/>

              <button className="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)}>Logar</button>
         
           <div id="links-login">
              <Link id="link-login" to="/forgot" className="float-right">Esqueceu sua senha?</Link> 
        <Link  id="link-login" to="/signup" className="float-right">Não tem uma conta?</Link>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<button type="hidden" id="modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     

  <div class="my-3 p-3 bg-white">
   
    <div class="media text-muted pt-3">
      <p class="media-body pb-3 mb-0 lh-125 border-gray">
      </p>
    </div>
    <div class="text-center">
      <img src="https://raw.githubusercontent.com/dioliveira84/front-big-bets/master/images/notsubmitted.png" class="img-fluid" alt="Responsive image" width="20%" height="20%"/>
    </div>
    <br/>
    <main role="main" class="inner cover">
      <h4 class="cover-heading text-center text-grey">Dados Invalidos</h4>
    </main>

    <br/>

  </div>


      </div>
     
    </div>
  </div>
</div>
</>

   )
 }

render(){
 const Redirect = this.props.redirect;

  if(this.props.getLogin()){
    return <Redirect to={{ pathname: "/app" }} />
  }else{
    return this.renderLoginForm()
  }
}
}

export default Login;