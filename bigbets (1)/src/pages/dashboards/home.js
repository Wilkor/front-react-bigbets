import React, {Component} from 'react';
import PieChat from './components/piechat'
import PieChatValor from './components/valuechart'
import './style.css'
class HomeDashboard extends Component{

render(){



   return (

          <>
        
          <main role="main" class="container">

  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h4 class="border-bottom border-gray pb-2 mb-0">Dashboards</h4>
    <br/>

          <div id="grafics">
        
           <PieChat/>
          <PieChatValor/>
          </div>
          </div>
          </main>
    </>
   )

}

}


export default HomeDashboard;