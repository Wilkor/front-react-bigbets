import React,{Component} from 'react';
import reseted from '../../../servicesAPI/sendEmailReset'

class Forgot extends Component {


constructor(props){

  super(props);

  this.state={

      email:'',
      response:null
  }

 }

async handleClick(event){
  event.preventDefault();
const reset =  await reseted(this.state.email)
     .then(response =>{return response})

      this.setState({response:true})
}



 render(){

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
                      {
                        this.state.response?<img src="https://uploads-petme.s3.us-east-2.amazonaws.com/98d0349bd87e6ac33acfabf168d95b17-submitted.png" class="img-fluid" alt="Responsive image" width="20%" height="20%"/>:""
                      }
                      {this.state.response?(
                         <main role="main" class="inner cover">
                      <h4 class="cover-heading text-center text-grey">Verifique seu email!</h4>
                      </main>
                      ):""}

                      <br/><br/>
                          <h5>Digite seu e-mail</h5>
                      <form class="form-signin">
                        <input type="text" name="email" onChange = {(event) => this.setState({email:event.target.value})} class="form-control mb-2" placeholder="Endereço de email" required autofocus/>
                    
                        <button class="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)} type="submit">Enivar</button>
                  
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
}
export default Forgot;