import { useEffect, useState } from 'react'
import './App.css'
import IMAGES from './assets/images/Images'
import DATA from './data'
import { formatNumber } from './helper'
import Info from './components/Info/Info'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

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

  // handle change on input
  const handleChange = (e, id) => {
    const newData = [...data];
    const item = newData.find(item => item.id === id);
    if(item && parseInt(e.target.value)) {
      item.count = parseInt(e.target.value);
      setData(newData);
    }
  }

  // search for changes in the data
  const receiptItems = data.filter(item => item.count > 0);

  // create receipt items
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

  return (
    <>
      <Info imageUrl={IMAGES.gates}/>
      <Header wealth={wealth}/>
      
      <div className='product-container'>
       {data.map((item) => {
          return (
            <div key={item.id}>
              <Product 
                product={item}
                wealth={wealth}
                handleSell={handleSell}
                handleBuy={handleBuy}
                handleChange={handleChange}
              />
            </div>
          )
        })}
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
