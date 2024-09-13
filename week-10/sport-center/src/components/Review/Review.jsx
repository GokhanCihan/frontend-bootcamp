import './Review.style.css';
import client1 from '../../assets/images/client1.jpg';
import client2 from '../../assets/images/client2.jpg';

function Review() {
  
  return (
    <section id="review">
      <div className="content-area">
        <div className="section-heading">
          <h2>REVIEW CLIENT</h2>
          <div></div>
          <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney 
            College.</p>
        </div>
        <div className="review-cards">
          <div className="review-card">
            <div className="profile">
              <img src={client1} alt="man profile photo" />
              <div className="profile-info">
                <p className="profession">Diet Expert</p>
                <p className="job-title">CFO</p>
              </div>
            </div>
            <div className="comment">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nullo, sequi quia, libero voluptatibus
                 ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae 
                 tempora nostrum.</p>
            </div>
            <div className="triangle-left"></div>
            <div className="triangle-right"></div>
          </div>
          <div className="review-card">
            <div className="profile">
              <img src={client2} alt="woman profile photo" />
              <div className="profile-info">
                <p className="profession">Cardio Trainer</p>
                <p className="job-title">CEO</p>
              </div>
            </div>
            <div className="comment">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nullo, sequi quia, libero voluptatibus
                 ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae 
                 tempora nostrum.</p>
            </div>
            <div className="triangle-left"></div>
            <div className="triangle-right"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review