import './NewNote.css'

function NewNote(props) {
  return (
    <div className='new-note'>
      <textarea id="note-area" placeholder="Enter your note here..."></textarea>
      <div className='controls'>
        <div className='palette'>Color Palette</div>
        <button className='add-btn'>ADD</button>
      </div>
    </div>
  )
}

export default NewNote