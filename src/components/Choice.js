import './Choice.css'

function Choice(props) {
  function copyText() {
    navigator.clipboard.writeText(props.choiceTable[props.i])
  }

  return (
    <div
      className="choice"
      onClick={() => {
        copyText()
        props.click()
      }}
    >
      {props.value.trim()}
    </div>
  )
}

export default Choice
