import './Header.css'

function Header({wealth}) {
  return (
    <div className='header'>
      <h1>${wealth}</h1>
    </div>
  )
}

export default Header