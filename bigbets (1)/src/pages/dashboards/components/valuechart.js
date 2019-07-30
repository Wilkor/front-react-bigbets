
import React, {Component} from 'react';
import {Chart} from 'react-google-charts';

import getListProjectTimeLine from '../../../servicesAPI/getListProjectTimeLine'

class PieChatValor extends Component {


  constructor(props){

    super(props)

   this.state = {

     list:null,
     array:[]

    }



}

componentWillMount(){

const p1 = new Promise((resolve, reject) => { 
getListProjectTimeLine().then(response =>{ resolve(response)})
});
p1.then(values => {

  this.setState({array:values})
  })


}

handleDeliveryDataGrafic = () =>{


 let array=[]
 this.state.array.map((projeto, index) => {
                       
                      array.push([projeto.iniciativa])
                      
                      
                      })

return array

}

handleTransformArray = (countedNames)=>{

  var result = Object.keys(countedNames).map(function(key) {

    
  return [String(key), countedNames[key]];
});

return result 

}

handleTransformUniques = () =>{
 var names = this.handleDeliveryDataGrafic();

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

 return this.handleTransformArray(countedNames);
}

render(){
let header = [['Task', 'Hours per Day'],]
let arrau = this.handleTransformUniques()
let newArrayList = header.concat(arrau)

console.log(newArrayList)
  return (
  <>
  {  

      <>

              <Chart
                      width={'500px'}
                      height={'300px'}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={newArrayList}
                      options={{
                        title: 'Projetos',
                        is3D: true,
                      }}
                      rootProps={{ 'data-testid': '2' }}
                    />        
              
            </>

  }
  </>

  )


}

}

export default PieChatValor;