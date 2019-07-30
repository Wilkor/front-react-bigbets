import React from "react";
//import { isAuthenticated } from "./auth";
import Login from '../pages/home/components/Login';
import Cadastro from '../pages/projeto/components/formCadastro';
import Regras from '../pages/home/components/Regras';
import Home from '../pages/home/Home';
import Sobre from '../pages/home/components/Sobre';
import Missao from '../pages/home/components/Missao';
import Fale from '../pages/home/components/Faleconosco';
import SelecaoIdeia from '../pages/home/components/Selecaodeideias';
import Iniciativa from '../pages/home/components/Iniciativa';
import Solucao from '../pages/home/components/CadatroDeSolucao';

import Signup from '../pages/home/components/Signup';
import Forgot from '../pages/home/components/Forgot';
import Reset from '../pages/home/components/Reset';
import Logout from '../pages/home/components/Logout';
import HomeDashboard from '../pages/dashboards/home';

import ComiteIdeias from '../pages/home/comite/oportunidades';
import Solucoes from '../pages/home/comite/solucoes';

import MeusProjetos from '../pages/home/components/ListaProjetos';
import CadastroComAnexo from '../pages/home/components/CadastroComAnexo';


import Footer from '../pages/home/components/Footer';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../pages/home/components/Footer';
import getToken from '../servicesAPI/getToken';


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
    
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />


);

const Routes = (props) => (

   <>
  
  <BrowserRouter>

    <Navbar getLogin={getToken} />    
    <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/login"  render={()=> <Login redirect={Redirect} getLogin={getToken} setNewState={props.setNewState} user={props.user}/>} />
            <Route path="/regulamento" component={Regras} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/missao" component={Missao} />
            <Route path="/faleconosco" component={Fale} />

            <Route path="/aprovar" render={()=> <ComiteIdeias setIdeia={props.setIdeia}/>} />
            <Route path="/aprovacao" render={()=> <Solucoes setIdeia={props.setIdeia}/>} />
            <Route path="/projetos" render={()=> <MeusProjetos setIdeia={props.setIdeia}/>} />
            <Route path="/ideias" render={()=> <SelecaoIdeia setIdeia={props.setIdeia}/>} />


            <PrivateRoute path="/solucao" component={Solucao} />
            <PrivateRoute path="/meusaprovados" component={CadastroComAnexo} />


            <Route path="/signup" render={()=> <Signup redirect={Redirect} getLogin={getToken} setNewState={props.setNewState} user={props.user}/>} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/forgotbigbets/reset/:id" render={(props) => <Reset {...props} redirect={Redirect}/>}/> />


            <PrivateRoute path="/iniciativa" component={Iniciativa} />
            <PrivateRoute path="/dashboards" component={HomeDashboard} />
            <Route path="/logout" render={()=> <Logout setNewState={props.setNewState} user={props.user}/>} />
            <PrivateRoute path="/app" component={() => <Home/> } />


    </Switch>
     <Footer/>
  </BrowserRouter>
  </>
   
);

export default Routes;
