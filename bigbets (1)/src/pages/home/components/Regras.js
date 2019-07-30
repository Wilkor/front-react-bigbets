import React,{Component} from 'react';


class Regras extends Component {


 render(){

        return (

<>
  <main role="main" class="container">

    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <h4 class="border-bottom border-gray pb-2 mb-0">Como Funciona</h4>
      <br/>
      <div class="media text-muted pt-3">
        <img src="https://uploads-petme.s3.amazonaws.com/14bb2ae50a05968121f09f01a6f41efc-one.png" alt="one.png" height="52" width="52"/>
        <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">Envie sua idéia</strong>
          Crie soluções para problemas, ou dê idéias que possam trazer alguma contribuição à nossa organização ou para os próprios colaboradores.
        </p>
      </div>
      <div class="media text-muted pt-3">
        <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/ee4262e28ca87884af345675e23c94bf-two.png" alt="two.png" height="52" width="52"/>
        <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">Seu gerente aprova</strong>
          Antes do comitê avaliar sua idéia o seu gerente precisa aprovar sua sugestão.
        </p>
      </div>
      <div class="media text-muted pt-3">
        <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/0a38ba9bca4501fd923515227494ab43-three.png" alt="three.png" height="52" width="52"/>
        <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">Nós revisamos</strong>
          O comitê revisa a idéia e a categoriza como Ouro, Prata ou Bronze.
        </p>
      </div>
      <div class="media text-muted pt-3">
        <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/498ea984fcf3628990c928e1b3038451-four.png" alt="four.png" height="52" width="52"/>
        <p class="media-body pb-3 mb-0 lh-125 border-gray">
          <strong class="d-block text-gray-dark">Pronto!</strong>
          Você recebe uma comissão pela idéia.
          <br/>
        </p>
      </div>
    </div>

  </main>

  
     
      </>
        )
 }
}
export default Regras;