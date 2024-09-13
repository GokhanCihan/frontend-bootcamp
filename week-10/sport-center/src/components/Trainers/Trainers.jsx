import './Trainers.style.css';
import trainer1 from '../../assets/images/trainer1.jpg';
import trainer2 from '../../assets/images/trainer2.jpg';
import trainer3 from '../../assets/images/trainer3.jpg';

function Trainers() {
  
  return (
    <section id="trainers">
      <div className="content-area">
        <div className="section-heading">
          <h2>OUR BEST TRAINERS</h2>
          <div></div>
          <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney 
            College</p>
        </div>
        <div id="trainer-photos">
          <div className="clip-cross">
            <img id="trainer-1" src={trainer1} alt="yoga trainer" />
            <span className="name-tag">
              <p>Jane Doe</p>
              <p>Cardio Trainer</p>
            </span>
          </div>
          <div className="clip-cross">
            <img id="trainer-2" src={trainer2} alt="fitness trainer" />
            <span className="name-tag">
              <p>John Doe</p>
              <p>Cardio Trainer</p>
            </span>
          </div>
          <div className="clip-cross">
            <img id="trainer-3" src={trainer3} alt="cardio trainer" />
            <span className="name-tag">
              <p>Jane Doe</p>
              <p>Cardio Trainer</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers