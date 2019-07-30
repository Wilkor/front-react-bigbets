import React,{Component} from 'react';


class Missao extends Component {

 constructor(props){

if(!!localStorage.getItem('@bigbets:token')){

const token = localStorage.getItem('@bigbets:token')
let tokenDecode = decode(token)

console.log(tokenDecode)
}


 }




 render(){

        return (
    <>
    <main role="main" class="container">

  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h4 class="border-bottom border-gray pb-2 mb-0">Missão</h4>
    <br/>
    <div class="media text-muted pt-3">
      <p class="media-body pb-3 mb-0 lh-125 border-gray">
        Obter ideias dos colaboradores de todas as áreas e transformá-las em oportunidades para a empresa. Onde Inovar:
        Processos de negócios, Redução de custos, Geração de receitas e Modelo de negócios.
      </p>
      <br/>
    </div>
    <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/4e68803b534729166464ca07f2f61813-ideias.png" class="img-fluid" alt="Responsive image"/>
  </div>



</main>

    </>
        )
 }
}
export default Missao;