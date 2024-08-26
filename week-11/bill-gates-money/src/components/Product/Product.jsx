import './Product.css'
import { formatNumber } from '../../helper.js'

function Product({ wealth, product, handleSell, handleBuy, handleChange }) {
  return (
    <div className='product'>
      <img src={product.imageUrl} alt={product.product} />
      <span className='name'>{product.product}</span>
      <span className='cost'>${formatNumber(product.cost)}</span>
      <div className='input-container'>
        <button className='sell-btn' disabled={product.count<1} onClick={() => handleSell(product.id)}>Sell</button>
        <input type="text" value={product.count} onChange={(e) => handleChange(e, product.id)} />
        <button className='buy-btn' disabled={product.cost>wealth} onClick={() => handleBuy(product.id)}>Buy</button>
      </div>
    </div>
  )
}

export default Product