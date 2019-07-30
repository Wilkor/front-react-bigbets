import React,{Component} from 'react';
import UploadFile from '../../projeto/uploadFile';
import updateProject from '../../../servicesAPI/updateProject'
import decode from 'jwt-decode';
import Modal1 from './Modal'
import {ProgressBar} from 'react-bootstrap'


class MeuProjeto extends Component {

constructor(props){

  super(props)

  this.state ={
     projeto:this.props.location.ideia,
     etapa:null,
     descricao:null,
     solucao:null
  }
}

 async handleClick(event,id){

 event.preventDefault();

if(!!localStorage.getItem('@bigbets:token')){

const token = localStorage.getItem('@bigbets:token')
let tokenDecode = decode(token)

   const upadate =  await updateProject(this.state.descricao
   ,this.state.etapa,id)
     .then(response =>{


       document.getElementById("modal").click();
       return response
      
     })
}

 }

 render(){

   let porcent = this.state.projeto.etapa == "Iniciação" ? 25:this.state.projeto.etapa == "Planejamento"? 50:
   this.state.projeto.etapa =="Execução"?75:this.state.projeto.etapa =="Encerramento"?100:0

    return (

       <>
       
       <main role="main" class="container">


    <div class="row">

<br/><br/>
       <div class="col-md-5 order-md-2 mb-4">
       
         
            
            
             <UploadFile idAnexo={this.state.projeto._id} />
             
            
       
        </div>
        <div class="col-md-7 order-md-1">
            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <h4 class="border-bottom border-gray pb-2 mb-0">fases do Projeto</h4>
                <br/>
             <div class="form-group text-grey">
        <label for="exampleFormControlInput1">Iniciativa</label>
        <input type="ideia" class="form-control" value={this.state.projeto.iniciativa} id="exampleFormControlInput1" disabled/>
    </div>
                <div class="form-group text-grey">
                    <label for="exampleFormControlInput1">Solução</label>
                    <input type="ideia" class="form-control" value={this.state.projeto.titulo} id="exampleFormControlInput1" onChange = {(event) => this.setState({solucao:event.target.value})} disabled/>
                  </div>

                    <label for="exampleFormControlInput1">Etapa</label>
                      <select class="form-control"  onChange = {(event) => this.setState({etapa:event.target.value})}>
                          <option value={this.state.projeto.etapa}>{this.state.projeto.etapa}</option>
                          <option value="Iniciação">Iniciação</option>
                          <option value="Planejamento">Planejamento</option>
                          <option value="Execução">Execução</option>
                          <option value="Encerramento">Encerramento</option>
                      </select>
              
                <div class="form-group text-grey">
                    <label for="exampleFormControlTextarea1">Descrição detalhada da Solução</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3" onChange = {(event) => this.setState({descricao:event.target.value})}></textarea>
                  </div>
                 <button className="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event,this.state.projeto._id)}>Atualizar</button>
    
              </div>
      </div>  
         </div>  

  
 <ProgressBar animated now={porcent} label={`${porcent}%`} />
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
      <h4 class="cover-heading text-center text-grey">Sua idéia foi atualizada com sucesso !</h4>
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
export default MeuProjeto;