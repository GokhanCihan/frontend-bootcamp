import './info.css'

function Info({imageUrl}) {
  return (
    <div className='info'>
      <img src={imageUrl} alt="Bill Gates' Portrait" />
      <h1>Spend Bill Gates' Money</h1>
    </div>
  )
}

export default Info