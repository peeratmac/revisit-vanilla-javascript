var studyButton = document.querySelector('.study');
var meditateButton = document.querySelector('.meditate');
var exerciseButton = document.querySelector('.exercise');
var accomplishInput = document.querySelector('.accomplish-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var startActivity = document.querySelector('.start-activity-button');
var activityToBeAdded = document.querySelector('.activity-to-be-added');
var lightdarkButton = document.querySelector('.lightdark-button');
var main = document.querySelector('body');

studyButton.addEventListener('click', addTheHighlight);
meditateButton.addEventListener('click', addTheHighlight2);
exerciseButton.addEventListener('click', addTheHighlight3);
startActivity.addEventListener('click', appendActivity);
lightdarkButton.addEventListener('click', toggleLightDark);

function addTheHighlight(event) {
  if (event.target === studyButton) {
    studyButton.classList.add('border-red');
  }
}

function addTheHighlight2(event) {
  if (event.target === meditateButton) {
    meditateButton.classList.add('border-red');
  }
}

function addTheHighlight3(event) {
  if (event.target === exerciseButton) {
    exerciseButton.classList.add('border-red');
  }
}

function updateMainDisplay() {
  console.log(accomplishInput.value, minutesInput.value, secondsInput.value);
}

function appendActivity() {
  var newActivity = `<article class="border-new-activity"><h2>What I wanna do?</h2><h3>${accomplishInput.value}</h3><h2>How many minutes and seconds?</h2><h3>${minutesInput.value} minutes and ${secondsInput.value} seconds!</h3><h1>And we are starting now!!!</h1></article>`;

  activityToBeAdded.insertAdjacentHTML('afterbegin', newActivity);

  var timeleft = minutesInput.value * 60 + secondsInput.value;
  var downloadTimer = setInterval(function() {
    document.getElementById('countdown').innerHTML =
      timeleft + ' seconds remaining';
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById('countdown').innerHTML = 'Finished';
    }
  }, 1000);
}

function toggleLightDark() {
  main.classList.toggle('toggle-dark');
}
