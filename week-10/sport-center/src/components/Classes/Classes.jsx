import './Classes.style.css';
import Heading from '../Heading/Heading';
import yoga from '../../assets/images/yoga.jpg';
import group from '../../assets/images/group.jpg';
import solo from '../../assets/images/solo.jpg';
import stretching from '../../assets/images/stretching.jpg';

import { useState } from 'react';

const data = [
  {"name": "Yoga", "img": yoga },
  {"name": "Group", "img": group },
  {"name": "Solo", "img": solo },
  {"name": "Stretching", "img": stretching }
]

function Classes() {
  const [active, setActive] = useState('yoga');

  const heading = "our classes";
  const paragraph = `Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney 
  College`

  const handleClick = (e) => {
    setActive(e.target.innerText.toLowerCase());
  }

  const activeLesson = data.find(item => item.name.toLocaleLowerCase() === active);

  return (
    <section id="classes">
      <div className="content-area">
        <Heading heading={heading} paragraph={paragraph} />
        <div id="lessons">
          {
            data.map((item, index) => {
              return (
                  <button 
                    key={index} 
                    onClick={handleClick} 
                    className={item.name.toLowerCase() === active ? "clicked inv-triangle" : ""}
                  >
                    {item.name}
                  </button>                
              )
            })
          }
        </div>
        <div id="lesson-content">
          <article>
            <h3>Why our <span id="lesson-why">{activeLesson.name}</span> Classes?</h3>
            <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit
               odit preferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam 
               sapiente nulla totam neque eum veniam</p>
            <h3>When comes our <span id="lesson-when">{activeLesson.name}</span> Time?</h3>
            <p className="time">Saturday-Sunday: 8:00am - 10:00am</p>
            <p className="time">Monday-Tuesday: 10:00am - 12:00pm</p>
            <p className="time">Wednesday-Friday: 3:00pm - 6:00pm</p>
          </article>
          <img id="lesson-image" src={activeLesson.img} alt="workout" />
        </div>
      </div>
      <div id="clip-polygon"></div>
    </section>
  )
}

export default Classes