import './Choice.css'

function Choice(props){

  function copyText(){
    navigator.clipboard.writeText(props.choiceTable[props.i]);
    showPopup()
  }

  function showPopup (){
    let popup = document.querySelector('.popup')
    popup.style.display = "inline-block"

    setTimeout(function(){
      popup.style.display = "none"
    }, 1500)
  }

  return (
    <div className='choice' onClick={copyText}>{props.value.trim()}</div>
  )
}

export default Choice