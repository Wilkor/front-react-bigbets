import React,{Component} from 'react';
import decode from 'jwt-decode';
import setIniciativa from '../../../servicesAPI/setIniciativa'

class Iniciativa extends Component {

constructor(props){

  super(props)

  this.state={

     iniciativa:null,
     descricao:null,
     area:null

  }
}

 async handleClick(event){

 event.preventDefault();

if(!!localStorage.getItem('@bigbets:token')){

const token = localStorage.getItem('@bigbets:token')
let tokenDecode = decode(token)

   const iniciativa =  await setIniciativa(this.state.iniciativa,this.state.descricao,tokenDecode.id,tokenDecode.perfil,this.state.area||tokenDecode.area)
     .then(response =>{

     document.getElementById("modal").click();
       return response
      
     })
}


}

 render(props){

    return (

    <>

   <main role="main" class="container">

  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h4 class="border-bottom border-gray pb-2 mb-0">Cadastro</h4>
    <br/>

    <div class="form-group text-grey">
        <label for="exampleFormControlInput1">Titulo</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange = {(event) => this.setState({iniciativa:event.target.value})}/>
      </div>
      <label for="exampleFormControlInput1">Area</label>
          <select class="form-control" onChange = {(event) => this.setState({area:event.target.value})}>
              <option value="Selecione">Selecione</option>
              <option value="Financeiro">Financeiro</option>
              <option value="RH">RH</option>
              <option value="TI">TI</option>
              <option value="Logistica">Logistica</option>
          </select>
  
    <div class="form-group text-grey">
        <label for="exampleFormControlTextarea1">Descrição detalhada da Idéia</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {(event) => this.setState({descricao:event.target.value})}></textarea>
      </div>
            <button className="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)}>Cadatrar</button>
  </div>

</main>

<button type="hidden" id="modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Confirmação</h5>
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
      <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/98d0349bd87e6ac33acfabf168d95b17-submitted.png" class="img-fluid" alt="Responsive image" width="20%" height="20%"/>
    </div>
    <br/>
    <main role="main" class="inner cover">
      <h4 class="cover-heading text-center text-grey">Sua idéia foi enviada com sucesso !</h4>
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
}
export default Iniciativa;