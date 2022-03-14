import { useState, useEffect } from 'react'
import CopyInfo from './CopyInfo.js'
import './Input.css'
import Choice from './Choice.js'

function Input (){
  const [choiceTable, addChoice] = useState([])


  function handleChange(event){
    addChoice(event.target.value.split(',').filter(choice => choice.trim() !== ''))
  }

  useEffect(() => {}, [choiceTable])

  
  
  return <>
    <textarea className="input" placeholder='Enter choices here...' style={{height: "100px", width: "500px"}}   onChange={handleChange}></textarea>
    <CopyInfo/>

    <div className="choiceWrapper">{choiceTable.map((choice, index) => choice ? <Choice key={index} i={index} value={choice} choiceTable={choiceTable}/> : "")}</div>
    <div className='popupWrapper'>
      <span className='popup'>Choice copied to clipboard!</span>
    </div>

  </>
}

export default Input

