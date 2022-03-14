import './App.css';
import Container from './components/Container.js'
import { useEffect } from 'react'

function App() {
  let times = 25;

  useEffect(() => {
    const listener = window.addEventListener('keydown', event => {
      if(event.key == "Enter"){
        random()
      }
    })

    return () => {
      window.removeEventListener(listener)
    }
  }, [])

  function randomChoice(){
    const choiceList = document.querySelectorAll(".choice")
    return choiceList[Math.floor(Math.random() *choiceList.length)]
  }

  function highlightAnimation(){
    const choiceList = document.querySelectorAll(".choice")
    choiceList.forEach(choice =>{
      setTimeout(()=>{
        choice.classList.add("highlight")
      }, times+=75)
    })

    choiceList.forEach(choice =>{
      setTimeout(()=>{
        choice.classList.remove("highlight")
      }, times+=75)
    })
  }

  function clearChoices(){
    const choiceList = document.querySelectorAll(".choice")
    choiceList.forEach(choice =>{
        choice.classList.remove("highlight")
    })
  }

  function random(){
    clearChoices()
    highlightAnimation()
    const choice = randomChoice()
    setTimeout(()=>{
      choice.classList.add("highlight")
    }, times)

  }

  return (
    <>
    <div className='container'>
    <Container/>
    </div>
    </>
  );
}

export default App;
