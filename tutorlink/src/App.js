import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Tutorlink</title>
        <link rel="stylesheet" href="App.css"></link>
      </head>
      <body>
          <div class="main">
              <div class="navbar">
                  <div class="icon">
                      {/* <h2 class="logo"><img src="HorizontalLogo.png" alt="Tutorlink" width="200" /></h2> */}
                      <h2 class="logo">Tutorlink</h2>
                  </div> 
                  <div class="menu">
                      <ul>
                          <li><a href="#home" data-after="Home">Home</a></li>
                          <li><a href="#services" data-after="Service">Services</a></li>
                          <li><a href="#about" data-after="About">About</a></li>
                          <li><a href="#contact" data-after="Contact">Contact</a></li>
                      </ul>
                  </div>
              </div> 
            </div>   

          <section id="home">
                  <div class="content">
                      <div class="container1">
                          <h1>Link with your ideal tutor </h1>
                          <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
                              expedita atque eveniet quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
                              a quae totam ipsa illum minus laudantium? 
                              <button class="cn"><a href="#">Click here to Download</a></button>
                          </p>
                      </div>
                  </div>          
          </section>
          
          <section id="services">
              <div class="services container">
                <div class="service-top">
                    <h1 class="section-title">Services</h1>
                </div>
                <div class="service-bottom">
                    <div class="service-item">
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum</p>
                    </div>
                    <div class="service-item">
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum</p>
                    </div>
                    <div class="service-item">
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum</p>
                    </div>
                </div>
              </div>
          </section>
        
      </body>
    </div>

  );
}

export default App;
