import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonHigher,
  buttonLower,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  buttonLightMode,
  buttonDarkMode,
  background,
}
from "./elements.js"

import Sound from "./sounds.js"

const sound = Sound ()

export default function({timer}) {

  buttonLightMode.addEventListener('click', function() {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    background.classList.add('backgroundDark')

    document.getElementById("timer").style.color = "white"
    document.getElementById("controls").classList.add('chosenControls')
    })
  
    buttonDarkMode.addEventListener('click', function() {
      buttonLightMode.classList.remove('hide')
      buttonDarkMode.classList.add('hide')
      background.classList.remove('backgroundDark')

      document.getElementById("timer").style.color = "black"
      document.getElementById("controls").classList.remove('chosenControls')
      })


  buttonForest.addEventListener('click', function () {
    sound.pressForest()
    buttonForest.classList.add('chosenSound')
    buttonCafeteria.classList.remove('chosenSound')
    buttonFireplace.classList.remove('chosenSound')
    buttonRain.classList.remove('chosenSound')

  })


buttonRain.addEventListener('click', function () {
  sound.pressRain()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.remove('chosenSound')
  buttonFireplace.classList.remove('chosenSound')
  buttonRain.classList.add('chosenSound')

})

buttonCafeteria.addEventListener('click', function () {
  sound.pressCafeteria()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.add('chosenSound')
  buttonFireplace.classList.remove('chosenSound')
  buttonRain.classList.remove('chosenSound')

})

buttonFireplace.addEventListener('click', function () {
  sound.pressFireplace()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.remove('chosenSound')
  buttonFireplace.classList.add('chosenSound')
  buttonRain.classList.remove('chosenSound')

})


buttonPlay.addEventListener('click', function() {
  timer.countdown()
})

buttonStop.addEventListener('click', function() {
  timer.reset()
})


buttonHigher.addEventListener('click', function() {
  timer.moreMinutes()
})


buttonLower.addEventListener('click', function() {
  timer.lessMinutes()
})


}