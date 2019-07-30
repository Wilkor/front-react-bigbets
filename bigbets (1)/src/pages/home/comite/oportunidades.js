import React,{Component} from 'react';

import Ideias from './ideias';


import getListComite from '../../../servicesAPI/getListComite'


class Opotunidades extends Component {

  constructor(props){

    super(props)

   this.state = {

     array:[]

    }



}



componentWillMount(){

const p1 = new Promise((resolve, reject) => { 
getListComite().then(response =>{ resolve(response)})
});
p1.then(values => {

  this.setState({array:values})

  })


}

setIdeia = () =>{

  this.props.setIdeia

}


 render(){


    console.log(this.state.array)


        return (
          <>
          <main role="main" class="container">

              <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Lista de Oportunidades</h4>
              <br/>

              {this.state.array.map((ideia)=>{

             return(
              <div class="list-group">
             <Ideias setIdeia={this.props.setIdeia} ideia={ideia}/>
              </div>
             )

              })}
              </div>
</main>
          </>
        )

 }
 
 
 }

 export default Opotunidades;