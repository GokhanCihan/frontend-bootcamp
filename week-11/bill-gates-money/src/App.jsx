import { useEffect, useState } from 'react'
import { formatNumber, formatReceiptNumber } from './helper'
import './App.css'
import IMAGES from './assets/images/Images'
import DATA from './data'
import Info from './components/Info/Info'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import ReceiptItem from './components/ReceiptItem/ReceiptItem'

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

  const receiptTotal = receiptItems.reduce((total, item) => {
    return total + (item.count * item.cost);
  }, 0)

  useEffect(() => {
    setWealth(initialWealth - receiptTotal)
  }, [data])

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
          {receiptItems.map((item) => {
            return (
              <div key={item.id}>
                <ReceiptItem item={item} />
              </div>              
            )})
          }
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
