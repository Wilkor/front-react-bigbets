import React,{Component} from 'react';

import './faleconoscostyle.css'
class Faleconosco extends Component {


 render(){

        return (
     <>
     <main role="main" class="container">

  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h4 class="border-bottom border-gray pb-2 mb-0">Fale Conosco</h4>
    <br/>
    <div class="media text-muted pt-3">
      <p class="media-body pb-3 mb-0 small lh-125">
        <iframe id="iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.746767753337!2d-46.6601331!3d-23.5617375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x694f27fed85d9b0c!2sIronhack+S%C3%A3o+Paulo!5e0!3m2!1sen!2sbr!4v1557594190039!5m2!1sen!2sbr"
        allowfullscreen></iframe>
      </p>
    </div>
    <br/>
    <h4 class="border-gray pb-2 mb-0 text-grey text-center">Veja outras formas de entrar em contato</h4>
    <div class="container">
      <br/>

      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h5 class="my-0 font-weight-normal">Telefone</h5>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4">
              <li>(11) 3062-8692</li>
            </ul>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h5 class="my-0 font-weight-normal">Email</h5>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4">
              <li>big-bets@gmail.com</li>

            </ul>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h5 class="my-0 font-weight-normal">Endereço</h5>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4">
              <li>Alameda Jaú, 1301</li>
              <li>Jardim Paulista</li>
              <li>São Paulo - SP</li>
              <li>01420-001</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>

</main>
     </>
        )
 }
}
export default Faleconosco;