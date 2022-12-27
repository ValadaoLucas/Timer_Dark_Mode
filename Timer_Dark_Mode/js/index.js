import Timer from "./timer.js"
import Events from "./events.js"
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
 
} from "./elements.js"


const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

Events({timer})
