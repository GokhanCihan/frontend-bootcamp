import './Classes.style.css'
import yoga from '../../assets/images/yoga.jpg'

function Classes() {
  
  return (
    <section id="classes">
      <div className="content-area">
        <div className="section-heading">
          <h2>OUR CLASSES</h2>
          <div></div>
          <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney 
            College</p>
        </div>
        <div id="lessons">
          <button id="yoga" className="clicked inv-triangle">
            Yoga
          </button>
          <button id="group">
            Group
          </button>
          <button id="solo">
            Solo
          </button>
          <button id="stretching">
            Stretching
          </button>
        </div>
        <div id="lesson-content">
          <article>
            <h3>Why our <span id="lesson-why">Yoga</span> Classes?</h3>
            <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit
               odit preferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam 
               sapiente nulla totam neque eum veniam</p>
            <h3>When comes our <span id="lesson-when">Yoga</span> Time?</h3>
            <p className="time">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="time">Monday-Tuesday: 10:00am - 12:00pm</p>
            <p className="time">Wednesday-Friday: 3:00pm - 6:00pm</p>
          </article>
          <img id="lesson-image" src={yoga} alt="workout" />
        </div>
      </div>
      <div id="clip-polygon"></div>
    </section>
  )
}

export default Classes