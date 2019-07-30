import React,{Component} from 'react';
import signup from '../../../servicesAPI/signup'

class Signup extends Component {

constructor(props){

  super(props);

  this.state={

      email:'',
      nome:'',
      perfil:'',
      area:'',
      senha:'',
      logged:false
  }

 }

 async handleClick(event){
  event.preventDefault();
const reset =  await signup(this.state.nome,this.state.email,this.state.perfil,this.state.area,this.state.senha)
     .then(response =>{return response}).catch(res=>{console.log(reset)})

     if(reset){

      this.setState({logged:true})

     }
}




 renderLoginForm(){

        return (

      <>
              <div class="container">
                <br/>
                <div class="container pt-3">
                  <div class="row justify-content-sm-center">
                    <div class="col-sm-6 col-md-4">
                      <div class="card border-info text-center">
                        <div class="card-header">
                          BigBets
                        </div>
                        <div class="card-body">
                          <img class="mr-3" src="" width="10%" />
                          <br/><br/>
                          <form  class="form-signin">
                            <input type="text" name="usuario" onChange = {(event) => this.setState({nome:event.target.value})} class="form-control mb-2" placeholder="Nome" required autofocus/>
                            <input type="text" onChange = {(event) => this.setState({email:event.target.value})} name="email" class="form-control mb-2" placeholder="Email" required/>
                            <br/>

                        <select class="form-control" onChange = {(event) => this.setState({area:event.target.value})}>
                              <option value="Selecione">Selecione sua Area</option>
                              <option value="Financeiro">Financeiro</option>
                              <option value="RH">RH</option>
                              <option value="TI">TI</option>
                              <option value="Logistica">Logistica</option>
                          </select>


                         <select class="form-control" onChange = {(event) => this.setState({perfil:event.target.value})}>
                              <option value="Selecione">Selecione um Perfil</option>
                              <option value="Colaborador">Colaborador</option>
                              <option value="Comite">Comite</option>
                              <option value="Gerente">Gerente</option>
                              
                          </select>
                            <input type="password" name="password" class="form-control mb-2" placeholder="Senha" onChange = {(event) => this.setState({senha:event.target.value})} required/>
                            <button class="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)}  type="submit">Cadastrar</button>
                            
                          </form>
                        </div>
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

  if(this.state.logged){
    return <Redirect to={{ pathname: "/app" }} />
  }else{
    return this.renderLoginForm()
  }
}
}
export default Signup;