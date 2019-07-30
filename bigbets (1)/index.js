import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './src/pages/home/components/Navbar';
import UploadFile from './src/pages/projeto/uploadFile';
import Routes from './src/routers/routes'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
class App extends Component {

  constructor(props){

    super(props);

   this.state ={

      userInfo: {},
      logged:false,
      ideia:null

    }


  }

changeState = (arg) =>{
  if (arg) {
  this.setState({
    userInfo: arg,
    logged: true
  })}

}

setIdeia =(ideia) =>{
  this.setState({ideia})
}


render(props) {
    return (
      <>
      
     <Routes setNewState={this.changeState} logged={this.state.logged} user={this.state} setIdeia={this.setIdeia}>
      </Routes>
    
      </>
     
    );
  }
}

render(<App />, document.getElementById('root'));
