import React,{Component} from 'react';
import login from '../../../servicesAPI/changePassword'
class Reset extends Component {

constructor(props){

  super(props);

  this.state={
      password:'',
      logged:false
  
  }
 }

  async handleClick(event){
   event.preventDefault();

   const logged =  await login(this.state.password,this.props.match.params.id)
     .then(response =>{
       
       this.setState({logged:true})
       return response

     })

    

 }
 renderLoginForm(props){
 
console.log(props)
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
     
            <br/><br/>
            <form  class="form-signin">
               <input type="password" onChange = {(event) => this.setState({password:event.target.value})} name="password" class="form-control mb-2" placeholder="Senha" required/>
              
              <button class="btn btn-lg btn-primary btn-block mb-1" type="submit" onClick={(event) => this.handleClick(event)}>Alterar Senha</button>
        
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
export default Reset;