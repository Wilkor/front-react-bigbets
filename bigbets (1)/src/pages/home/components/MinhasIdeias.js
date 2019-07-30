import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Ideias extends Component{

  constructor(props){

  super(props)

  }

setIdeia = () =>{

this.props.setIdeia(this.props.ideia)

}

render(){
const {ideia} = this.props



return (

         <Link to={{pathname: '/meusaprovados',ideia}} onClick={this.setIdeia}class="list-group-item list-group-item-action flex-column align-items-start btn-outline-primary">
              <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{ideia.iniciativa}</h5>
              <small>{ideia.area}</small>
              </div>
              <p class="mb-1">{ideia.descricao}</p>
              <small>{ideia.id}</small>
              </Link>
)



}

}

export default Ideias