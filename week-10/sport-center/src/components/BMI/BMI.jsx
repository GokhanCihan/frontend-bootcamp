import './BMI.style.css'
import bmi from '../../assets/images/bmi-index.jpg'

function BMI() {
  
  return (
    <section id="bmi">
      <div className="content-area">
        <article>
          <h2>BMI Calculator</h2>
          <p>Contrary to popular belief. Lorem Ipsum is not simply random text. It has root in a piece of 
            classical latin literature from 45 BC, making it over 2000 years old.</p>
          <p>Contrary to popular belief. Lorem Ipsum is not simply random text. It has root in a piece of 
            classical latin literature from 45 BC, making it over 2000 years old.</p>
          <div id="inputs">
            <div>
              <input id="height" type="text" placeholder="Your Height" />
              <span>cm</span>
            </div>
            <div>
              <input id="weight" type="text" placeholder="Your Weight" />
              <span>kg</span>
            </div>
          </div>
        </article>
        <div id="bmi-index">
          <h3>Your BMI</h3>
          <img src={bmi} alt="bmi index" />
          <div id="bmi-indicator" className="triangle"></div>
        </div>
      </div>
    </section>
  )
}

export default BMI