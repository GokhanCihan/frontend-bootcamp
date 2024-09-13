import './Header.style.css'
import logo from '../../assets/images/logo.png'

function Header() {
  
  return (
    <section id="header">
        <div className="logo">
          <img src={logo} alt="sport center logo" />
        </div>
        <div className="menu-btn">
          <input type="checkbox" />
          <div></div>
          <div></div>
          <div></div>
          <ul className="navbar">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#classes">Classes</a>
            </li>
            <li>
              <a href="#trainers">Trainer</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button id="join-us-btn">
                <a href="">JOIN US</a>
              </button>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Header