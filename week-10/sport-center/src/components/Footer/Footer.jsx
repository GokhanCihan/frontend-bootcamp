import './Footer.style.css';
import logo from '../../assets/images/logo.png'

function Footer() {
  
  return (
    <footer>
      <div className="content-area">
        <img src={logo} alt="powerfull logo" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vero placeat, recusandae adipisci ea
           hic. Et velit hic consequatur alias molestias! Quasi expedita voluptates amet minima perspiciatis vero 
           rem eaque.</p>
        <div className="main-container">
          <div className="container">
            <h4>Information</h4>
            <a href="">About Us</a>
            <a href="">Classes</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
          <div className="container">
            <h4>Helpful Links</h4>
            <a href="">Services</a>
            <a href="">Supports</a>
            <a href="">Terms & Condition</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer