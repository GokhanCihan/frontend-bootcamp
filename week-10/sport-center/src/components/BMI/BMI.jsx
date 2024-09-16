import './BMI.style.css'
import bmi from '../../assets/images/bmi-index.jpg'
import { useEffect, useRef, useState } from 'react';

function BMI() {
  const [values, setValues] = useState({"height": null, "weight": null});
  const indexRef = useRef(null);

  const handleHeightChange = (e) => {
    setValues({...values,"height": e.target.value});
  }
  
  const handleWeightChange = (e) => {
    setValues({...values, "weight": e.target.value});
  }

  useEffect(() => {
    if(values.height>0 && values.weight>0) {
      const result = 10_000 * values.weight / (values.height ** 2);
      if(result<=18.5) {
        indexRef.current.style.left = "13%";
      }
      if (result > 18.5 && result <= 24.9) {
        indexRef.current.style.left = "29%";
      }
      if (result > 24.9 && result <= 29.9) {
        indexRef.current.style.left = "45%";
      }
      if (result > 29.9 && result <= 34.9) {
        indexRef.current.style.left = "61%";
      }
      if (result > 34.9) {
        indexRef.current.style.left = "77%";
      }
    }
  }, [values]);

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
              <input onChange={handleHeightChange} id="height" type="text" placeholder="Your Height" />
              <span>cm</span>
            </div>
            <div>
              <input onChange={handleWeightChange} id="weight" type="text" placeholder="Your Weight" />
              <span>kg</span>
            </div>
          </div>
        </article>
        <div id="bmi-index">
          <h3>Your BMI</h3>
          <img src={bmi} alt="bmi index" />
          <div ref={indexRef} id="bmi-indicator" className="triangle"></div>
        </div>
      </div>
    </section>
  )
}

export default BMI