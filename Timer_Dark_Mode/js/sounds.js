export default function () {
  let buttonForest = new Audio("./assets/Forest.wav")
  buttonForest.loop = true
  const buttonRain = new Audio("./assets/Rain.wav")
  buttonRain.loop = true
  const buttonCafeteria = new Audio("./assets/Cafeteria.wav")
  buttonCafeteria.loop = true
  const buttonFireplace = new Audio("./assets/Fireplace.wav")
  buttonFireplace.loop = true
  const forestVolume = document.querySelector('.forest-volume')
  const rainVolume = document.querySelector('.rain-volume')
  const cafeteriaVolume = document.querySelector('.cafeteria-volume')
  const fireplaceVolume = document.querySelector('.fireplace-volume')




  function pressForest() {
    buttonForest.play()
    buttonRain.pause()
    buttonCafeteria.pause()
    buttonFireplace.pause()
    
  }

  forestVolume.addEventListener('change', function () {
    buttonForest.volume = this.value;
  })


  function pressRain() {
    buttonRain.play()
    buttonForest.pause()
    buttonCafeteria.pause()
    buttonFireplace.pause()

  }

  rainVolume.addEventListener('change', function () {
    buttonRain.volume = this.value;
  })

  function pressCafeteria() {
    buttonCafeteria.play()
    buttonForest.pause()
    buttonRain.pause()
    buttonFireplace.pause()
  }

  cafeteriaVolume.addEventListener('change', function () {
    buttonCafeteria.volume = this.value;
  })

  function pressFireplace() {
    buttonFireplace.play()
    buttonCafeteria.pause()
    buttonForest.pause()
    buttonRain.pause()
  }

  fireplaceVolume.addEventListener('change', function () {
    buttonFireplace.volume = this.value;
  })

  return {
    pressForest,
    pressCafeteria,
    pressFireplace,
    pressRain,
  }
}
