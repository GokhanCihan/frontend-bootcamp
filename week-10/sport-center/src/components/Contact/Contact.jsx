import './Contact.style.css';
import Heading from '../Heading/Heading';

function Contact() {
  const heading = "contact us";
  const paragraph = `Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney`
  
  return (
    <section id="contact">
      <div className="content-area">
        <Heading heading={heading} paragraph={paragraph} />
        <div className="main-container">
          <div className="container">
            <div className="info-container">
              <div className="info">
                <h5>Mobile Number</h5>
                <p>+135 773 321 4442</p>
              </div>
              <div className="info">
                <h5>Email Address</h5>
                <p>demo@demo.com</p>
              </div>
            </div>
            <h4>Make An Appointment</h4>
            <form>
              <input id="name" className="appointment" type="text" placeholder="Your Name" />
              <input id="email" className="appointment" type="text" placeholder="Your Email" />
              <textarea id="message" className="appointment" name="message" placeholder="Your Message"></textarea>
            </form>
          </div>
          <div className="frame">
            <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?q=%20Grafton%20Street,%20Dublin,%20Ireland+(Powerfull%20Sport%20Center)
            &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact