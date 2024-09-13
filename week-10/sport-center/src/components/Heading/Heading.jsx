import './Heading.style.css';

function Heading({heading, paragraph}) {
  
  return (
    <div className="section-heading">
      <h2>{heading.toUpperCase()}</h2>
      <div></div>
      <p>{paragraph}</p>
    </div>
  )
}

export default Heading