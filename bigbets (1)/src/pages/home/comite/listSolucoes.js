import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import updateSolucoes from '../../../servicesAPI/updateSolucoes'
import deleteProjeto from '../../../servicesAPI/deleteProjeto'
class ListIdeias extends Component{

  constructor(props){

  super(props)

  }

setIdeia = () =>{

this.props.setIdeia(this.props.ideia)

}

handleAprove = (id) =>{

      updateSolucoes(id).then(res=>{

        document.getElementById("modal").click();

      })

}

handleDecline = (id) =>{

      deleteProjeto(id).then(res=>{

         document.getElementById("modal2").click();

      })

}

render(){
const {ideia} = this.props



return (
<>
       <div class="list-group-item list-group-item-action flex-column align-items-start btn-outline-primary">
              <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{ideia.iniciativa}</h5>
              <small>{ideia.area}</small>
              </div>
              <p class="mb-1">{ideia.descricao}</p>
              <small>{ideia.id}</small>

               <button className="btn btn-success" onClick={(event) => this.handleAprove(ideia._id)}>Aprovar</button>

                <button className="btn btn-danger" onClick={(event) => this.handleDecline(ideia._id)}>Recusar</button>
              </div>


              <button type="hidden" id="modal2" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
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
      <h4 class="cover-heading text-center text-grey">Aprovado com sucesso !</h4>
    </main>

    <br/>

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
      <h4 class="cover-heading text-center text-grey">Excluido com sucesso !</h4>
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

export default ListIdeias