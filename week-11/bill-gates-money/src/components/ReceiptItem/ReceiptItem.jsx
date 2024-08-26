import './ReceiptItem.css'
import { formatReceiptNumber } from '../../helper'

function ReceiptItem({item}) {
  return (
    <div className="item">
      <span className='name'>{item.product}</span>
      <span className='count'>x{item.count}</span>
      <span className='spend'>${formatReceiptNumber(item.cost * item.count)}</span>
    </div>
  )
}

export default ReceiptItem