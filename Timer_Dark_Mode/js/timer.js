export default function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)


  function updateDisplay(minutes, seconds) {
  

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function moreMinutes(newMinutes) {
    minutes = minutes + 5
    reset ()
  }

  function lessMinutes(newMinutes) {
    minutes = minutes - 5
    reset ()
  }

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
    

    updateDisplay(minutes, 0)

    if (isFinished) {
      resetControls()
      updateDisplay()
      return
    }

    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
  
}


function hold() {
  clearTimeout(timerTimeOut)
}

return {
  countdown,
  reset,
  updateDisplay,
  moreMinutes,
  lessMinutes,
  hold
}}