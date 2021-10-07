const weatherApp = document.querySelector('.weather-app')
const weatherDescription = document.querySelector('.weather-app-description-box')
const jsCalculator = document.querySelector('.js-calculator')

weatherApp.addEventListener('click', () => {
  console.log("Why are you stupid")
  weatherDescription.classList.toggle('show-description')
})

jsCalculator.addEventListener('click', () => {
  console.log("Hi :)")
})