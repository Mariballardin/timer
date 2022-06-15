
// Aqui estou usando o conceito de DOM para acessar objetos do meu HTML. DOM é uma programação event-driven - direcionada a eventos.

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector ('.seconds')

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.remove('hide')

}

function updateTimerDisplay (minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")

}

function countdown() {

  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    secondsDisplay.textContent = "00"

    if (minutes <= 0) {

      resetControls()

      return
    }
    
    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")


    countdown()
  }, 1000 )

}




buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
  
})


buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')

 })

 const buttonSet = document.querySelector('.set')
 const buttonStop = document.querySelector('.stop')


buttonStop.addEventListener('click', function() {
 
      resetControls()
  })

  buttonSoundOn.addEventListener('click', function (){
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')

  })

  buttonSoundOff.addEventListener('click', function (){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')

  })

  buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos você gostaria de cronometrar?')
    updateTimerDisplay(minutes, 0)

  })