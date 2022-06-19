import { useState, useRef } from 'react'
import CopyInfo from './CopyInfo.js'
import './Input.css'
import Choice from './Choice.js'

function Input() {
  const [choiceTable, addChoice] = useState([])
  const popup = useRef()

  function handleChange(event) {
    addChoice(event.target.value.split(',').filter(choice => choice.trim() !== ''))
  }

  function refPopup() {
    const popupToShow = popup.current
    popupToShow.style.display = 'block'
    setTimeout(() => {
      popupToShow.style.display = 'none'
    }, 1500)
  }

  return (
    <>
      <textarea
        className="input"
        placeholder="Enter choices here..."
        style={{ height: '100px', width: '500px' }}
        onChange={handleChange}
      ></textarea>
      <CopyInfo />
      <div className="choiceWrapper">
        {choiceTable.map((choice, index) =>
          choice ? <Choice key={index} i={index} click={refPopup} value={choice} choiceTable={choiceTable} /> : null
        )}
      </div>
      <div className="popupWrapper">
        <span className="popup" ref={popup}>
          Choice copied to clipboard!
        </span>
      </div>
    </>
  )
}

export default Input
