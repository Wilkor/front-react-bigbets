import React,{Component} from 'react';



class Sobre extends Component {


 render(){

    return (
    <>

<main role="main" class="container">

  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h4 class="border-bottom border-gray pb-2 mb-0">Quem Somos</h4>
    <br/>

    <div class="card mb-3 flex-row img-fluid"><img src="https://uploads-petme.s3.us-east-2.amazonaws.com/ce2022c61e4e5c60503d9e10f2731991-wilkor.jpg" alt="Card image" class="card-img-left"  height="175" width="175"/>
      <div class="card-body">
        <h4 class="border-bottom border-gray pb-2 mb-0">Wilkor Almeida</h4>
        <br/>
        <h5 class="card-text">
          32 y/o, Senior System Analyst @ Safra, married with one kid, enjoy playing guitar and go out to drink with
          friends.
        </h5>
      </div>
    </div>
    <br/>
    <div class="card flex-row-reverse img-fluid"><img src="https://uploads-petme.s3.amazonaws.com/61733582ed59f0d5550aecec9a399f3c-diogo.jpg" alt="Card image"
        class="card-img-right" height="175" width="175"/>
      <div class="card-body">
        <h4 class="border-bottom border-gray pb-2 mb-0">Diogo Oliveira</h4>
        <br/>
        <h5 class="card-text">
          34 y/o, engineer, married but no kids (yet), works @ General Electric, enjoy jiu-jitsu, volunteering,
          travelling … enjoy life!
        </h5>
      </div>
    </div>

    <br/>
  </div>

</main>

    </>
        )
 }
}
export default Sobre;