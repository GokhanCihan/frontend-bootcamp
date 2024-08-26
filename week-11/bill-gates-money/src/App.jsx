import { useEffect, useState } from 'react'
import './App.css'
import IMAGES from './assets/images/Images'
import DATA from './data'

function App() {
  const initialWealth = 100_000_000_000;
  const [data, setData] = useState([...DATA]);
  const [wealth, setWealth] = useState(initialWealth);

  const handleSell = (id) => {
    const newData = [...data];
    const item = newData.find(item => item.id === id);
    if(item) {
      item.count = item.count - 1;
      setData(newData);
    }
  }

  const handleBuy = (id) => {
    const newData = [...data];
    const item = newData.find(item => item.id === id);
    if(item) {
      item.count = item.count + 1;
      setData(newData);
    }
  }

  const handleChange = (e, id) => {
    const newData = [...data];
    const item = newData.find(item => item.id === id);
    if(item && parseInt(e.target.value)) {
      item.count = parseInt(e.target.value);
      setData(newData);
    }
  }

  const products = data.map((item) => {
    return (
      <div key={item.id} className='product'>
        <img src={item.imageUrl} alt={item.product} />
        <span className='name'>{item.product}</span>
        <span className='cost'>${formatNumber(item.cost)}</span>
        <div className='input-container'>
          <button className='sell-btn' disabled={item.count<1} onClick={() => handleSell(item.id)}>Sell</button>
          <input type="text" value={item.count} onChange={(e) => handleChange(e, item.id)} />
          <button className='buy-btn' disabled={item.cost>wealth} onClick={() => handleBuy(item.id)}>Buy</button>
        </div>
      </div>
    )
  })

  const receiptItems = data.filter(item => item.count > 0);

  const receipt = receiptItems.map((item) => {
    return (
      <div key={item.id} className="item">
        <span className='name'>{item.product}</span>
        <span className='count'>x{item.count}</span>
        <span className='spend'>${formatReceiptNumber(item.cost * item.count)}</span>
      </div>
    )
  })

  const receiptTotal = receiptItems.reduce((total, item) => {
    return total + (item.count * item.cost);
  }, 0)

  useEffect(() => {
    setWealth(initialWealth - receiptTotal)
  }, [data])

  function formatReceiptNumber(num) {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1) + 'b';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(num % 1_000_000 > 0 ? 1 : 0 ) + 'm';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(num % 1_000 > 0 ? 1 : 0) + 'k';
    }
    return num.toString();
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className='info'>
        <img src={IMAGES.gates} alt="Bill Gates' Portrait" />
        <h1>Spend Bill Gates' Money</h1>
      </div>   
      <div className='header'>
        <h1>${wealth}</h1>
      </div>
      <div className='product-container'>
       {products}
      </div>

      <div className='receipt-container' hidden={receiptTotal === 0}>
        <div className='receipt'>
          <h2>Your Receipt</h2>
          {receipt}
          <div className='total'>
            <span>TOTAL</span>
            <span className='spend-total'>${formatNumber(receiptTotal)}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
