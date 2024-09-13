import './Purchase.style.css';
import purchase1 from '../../assets/images/purchase1.jpg';
import purchase2 from '../../assets/images/purchase2.jpg';
import purchase3 from '../../assets/images/purchase3.jpg';
import purchase4 from '../../assets/images/purchase4.jpg';

function Purchase() {
  
  return (
    <section id="purchase">
      <div className="content-area">
        <div className="section-heading">
          <h2>PURCHASE FROM US</h2>
          <div></div>
          <p>Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney 
            College.</p>
        </div>
        <div id="shopping">
          <div className="product-card">
            <img src={purchase1} alt="man holding kettlebell" />
            <h5>Kettlebell / 5kg</h5>
            <p className="discount"><span>89,99$</span> / <span>59,99$</span></p>
            <button className="cart-btn"><i className="bi bi-cart-fill"></i>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={purchase2} alt="man on treadmill" />
            <h5>Threadmill</h5>
            <p className="discount"><span>899,99$</span> / <span>599,99$</span></p>
            <button className="cart-btn"><i className="bi bi-cart-fill"></i>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={purchase3} alt="man sitting with dumbbels" />
            <h5>Adjustable Dumbbell</h5>
            <p className="discount"><span>89,99$</span> / <span>59,99$</span></p>
            <button className="cart-btn"><i className="bi bi-cart-fill"></i>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={purchase4} alt="kettlebells" />
            <h5>Kettlebell / 3kg</h5>
            <p className="discount"><span>89,99$</span> / <span>59,99$</span></p>
            <button className="cart-btn"><i className="bi bi-cart-fill"></i>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purchase