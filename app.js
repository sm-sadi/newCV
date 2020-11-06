


const aboutPage= document.getElementById("skillsDetails");
const homePage= document.getElementById("homePage");
const contactPage = document.getElementById("contactPage");
const portfolio = document.getElementById("portfo");

const dynamicContents = document.getElementById("dynamicContent");

// skill page 
aboutPage.addEventListener("click" , function(){
   dynamicContents.innerHTML = ` <!--start of progress section-->
   <section id="progress" class="">
       <div class="container">
          <!--title for progress section-->
      <div class="row ">
       <div class="col text-center">
         <h1 class="display-5 text-uppercase text-dark mb-0">
         <strong>My Skill</strong> 
         </h1>
         <div class="title-underline bg-primary"></div>
           <p class="text-capitalize  mt-1">my coding skills</p>    
       </div>
     </div>
     <!--end of progress title -->
     <div class="row">
       <div class="col-md-8 mx-auto">
         <!--progress html bar-->
         <h1 class="text-dark">  html</h1>
         <div class="progress bg-secondary">
           <div class="progress-bar bg-success" style="width: 80%"></div>
         </div>
         <!--progress css bar-->
         <h1 class="text-dark"> Css</h1>
         <div class="progress bg-secondary">
           <div class="progress-bar bg-warning" style="width: 50%"></div>
         </div>
         <!--progress js bar-->
         <h1 class="text-dark">  javaScript</h1>
         <div class="progress bg-secondary">
           <div class="progress-bar bg-warning" style="width: 50%"></div>
         </div>
         <!--progress bootstrap bar-->
         <h1 class="text-dark"> 
            Bootstrap</h1>
         
         <div class="progress bg-secondary">
           <div class="progress-bar bg-success" style="width: 80%"></div>
         </div>
          <!--progress database bar-->
          <div class="prog my text-dark d-flex justify-content-between">
            <h1> <i class="fa fa-database" aria-hidden="true"></i>
                 -MySQL</h1>
            
          </div>
          
          <div class="progress bg-secondary">
            <div class="progress-bar bg-danger" style="width: 30%"></div>
          </div>
       </div>
     </div>
       </div>
     
     </section>
     <!--end of progress section-->`;
}
);

// homePage
homePage.addEventListener("click" , function(){
    dynamicContents.innerHTML = `<!--start of home section -->
    <section id="skills" class="bg-white py-5">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 class="display-4 text-uppercase text-dark mb-0">
            <strong>Welcome</strong> 
            </h1>
            <div class="title-underline bg-danger"></div>
            <p>Hello, <br> 
            My name is Showaib Mehedi Sadi and I am a <em class="text-dark">junior frontend Developer</em> . I am looking for an opportunity to code design and learn new things. my regular goal is to code a minimum of at least 30 minutes a day in my free time. I am hoping to become a full stuck developer in the future. except these, I like riding a motorcycle, traveling, and watching movies.
            </p>
            
         `;
 }
 );

 //cotact page 
 contactPage.addEventListener("click" , function(){
    dynamicContents.innerHTML = `<section id="contact" class=" py-2">
    <!--title for contact section-->
  <div class="row  ">
   <div class="col text-center ">
     <h1 class="display-4 text-uppercase text-dark mb-0">
     <strong>contact</strong> 
     </h1>
     <div class="title-underline bg-primary"></div>
       <p class="text-capitalize  mt-2">please use the form to conatact me</p>
   </div>
 </div>
 <!--end of contact title -->
 <div class="row ">
   <div class="col-md-6 my-3 p-3 mx-auto">
     <div class="card card-body bg-secondary">
       <!--title for form-->
       <div class="card-title text-center text-white">
      <h2 class="text-capitalize"> why not send an email ?</h2>
      <p>new user signIn</p>
     </div>
     <!--end of title  for form-->
     <form >
       <!--name -->
       <div class="form-group ">
         <input type="text"  id="name" class="form-control form-control-lg" placeholder="name">
       </div>
       <!--email-->
       <div class="form-group mt-3">
         <input type="email"  id="email" class="form-control " placeholder="email">
       </div>
       <!--Phone-->
       <div class="form-group mt-3">
         <input type="text"  id="name" class="form-control form-control-lg"  placeholder="Text">
       </div>
       <!--input group-->
 
 <button type="submit" class="btn btn-outline-dark btn-block">Send</button >
 
     </form>
     </div>
   
   <!--end of google map -->
 </div>
 
 </section> `;
 }
 );

 portfolio.addEventListener("click" , function(){
  dynamicContents.innerHTML = `<section id="portfolio" class="p-2 ">
  <div class="row mx-auto">
    
      <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project 1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/CV/" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
        <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project 1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/CV/" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
        <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project 1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/CV/" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
      <!-- end of first card -->
      <!-- first card -->
  <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="./project 1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://sm-sadi.github.io/CV/" target="_blank" class="btn btn-primary">click to visit </a>
      </div>
    </div>
  </div>
    <!-- end of first card -->
 </div>
</section>
       `;
}
);