import React,{Component} from 'react';

class Home extends Component {


 render(){

        return (
     <>

<main role="main" class="container">

  
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://raw.githubusercontent.com/Wilkor/BigBets/master/home/js_carosel_img/step1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/Wilkor/BigBets/master/home/js_carosel_img/step2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/Wilkor/BigBets/master/home/js_carosel_img/step3.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <br/>

    <section class="bg-gradient-light py-3 mb-4">
      <div class="container">
        <h4 class="font-weight-light text-grey border-bottom border-gray pb-2 mb-0">Como Funciona</h4>
      </div>
    </section>

    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-40">
          <img class="card-img" src="https://uploads-petme.s3.us-east-2.amazonaws.com/14bb2ae50a05968121f09f01a6f41efc-one.png" alt="" weight="50%" width="50%"/>
          <div class="card-body">
            <h5 class="card-title">Você envia sua idéia agora</h5>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-40">
          <img class="card-img" src="https://uploads-petme.s3.us-east-2.amazonaws.com/ee4262e28ca87884af345675e23c94bf-two.png" alt="" weight="50%" width="50%"/>
          <div class="card-body">
            <h5 class="card-title">Seu gerente aprova a oportunidade</h5>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-40">
          <img class="card-img" src="https://uploads-petme.s3.us-east-2.amazonaws.com/0a38ba9bca4501fd923515227494ab43-three.png" alt="" weight="50%" width="50%"/>
          <div class="card-body">
            <h5 class="card-title">Nós revisamos com o comitê</h5>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-40">
          <img class="card-img" src="https://uploads-petme.s3.us-east-2.amazonaws.com/498ea984fcf3628990c928e1b3038451-four.png" alt="" weight="50%" width="50%"/>
          <div class="card-body">
            <h5 class="card-title">Pronto! Bônus garantido</h5>
          </div>
        </div>
      </div>

    </div>


    <section class="bg-gradient-light py-3 mb-4">
      <div class="container">
        <h4 class="font-weight-light text-grey border-bottom border-gray pb-2 mb-0">Fundadores</h4>
      </div>
    </section>

<section class="team-section text-center my-5">
    <div class="row text-center">
  
      <div class="col-md-4 mb-md-0 mb-5">
        <div class="avatar mx-auto">
          <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/ce2022c61e4e5c60503d9e10f2731991-wilkor.jpg" class="rounded z-depth-1-half" alt="Sample avatar" height="250" width="250"/>
        </div>
        <h4 class="font-weight-bold dark-grey-text my-4">Wilkor Almeida</h4>
        <h6 class="text-uppercase grey-text mb-3"><strong>Web Developer</strong></h6>
   
      </div>
    
      <div class="col-md-4 mb-md-0 mb-5">
        <div class="avatar mx-auto">
          <img src="https://uploads-petme.s3.us-east-2.amazonaws.com/61733582ed59f0d5550aecec9a399f3c-diogo.jpg" class="rounded z-depth-1-half" alt="Sample avatar" height="250" width="250"/>
        </div>
        <h4 class="font-weight-bold dark-grey-text my-4">Diogo Oliveira</h4>
        <h6 class="text-uppercase grey-text mb-3"><strong>Web Developer</strong></h6>
      </div>
    
      <div class="col-md-4">
        <div class="avatar mx-auto">
          <img src="https://www.prsindia.org/sites/default/files/styles/mp_track_simple_crop/public/mp_images/4724.jpg?itok=1pwvVI_2" class="rounded z-depth-1-half" alt="Sample avatar" height="250" width="250"/>
        </div>
        <h4 class="font-weight-bold dark-grey-text my-4">Smriti Zubin Irani</h4>
        <h6 class="text-uppercase grey-text mb-3"><strong>Web Developer</strong></h6>
      </div>
    </div>
  </section> 

  

  </main>
     </>
        )
 }
}
export default Home;