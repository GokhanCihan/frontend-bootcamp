import './Hero.style.css'
import hero from '../../assets/images/hero-man.jpg'

function Hero() {

  return (
    <section id="home">
      <div id="hero">
        <div className="content-area">
          <button id="power-btn">POWERFULL</button>
          <h1>Group <span>Practice</span></h1> 
          <h1>With Trainer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut iste. Velit porro
            rerum, unde modi ipsam exercitationem laudantium illum. Id, laborum? Totam, dicta nisi. Voluptates, vero
            id. Perferendis.</p>
          <div className="btn-container">
            <button id="sign-up-btn">
              Sign Up
            </button>
            <button id="details-btn">
              Details
            </button>
          </div>
        </div>
      </div>
      <div id="stats">
        <div className="content-area">
          <div className="card-container">

            <div className="stat-card">
              <div className="hours">325</div>
              <div className="subject">Course</div>
            </div>
            <div className="stat-card">
              <div className="hours">405</div>
              <div className="subject">Work Out</div>
            </div>
            <div className="stat-card">
              <div className="hours">305</div>
              <div className="subject">Working Hour</div>
            </div>
            <div className="stat-card">
              <div className="hours">705</div>
              <div className="subject">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero