const videoTitle = document.getElementById('videoTitle');
const ageRatingOut = document.getElementById('ageRatingOut');

const input = document.querySelector('#videoTitleInput');
const ageRating = document.querySelectorAll('input[name="ageRating"]');

document.addEventListener('DOMContentLoaded', event => {
})

input.addEventListener('input', (event) => {
    videoTitle.textContent = event.target.value;
});

ageRating.forEach((radio) => {
  radio.addEventListener('change', (event) => {
      let currentValue = event.target.value;
      console.log(currentValue);
      if (currentValue === '18') {
          ageRatingOut.style.color = 'red';
          currentValue = currentValue + "+";
      } else if (currentValue === '15') {
          ageRatingOut.style.color = 'yellow';
          currentValue = currentValue + "+";
      } else {
          ageRatingOut.style.color = 'white';
          currentValue = currentValue + "+";
      }
      ageRatingOut.textContent = currentValue;
  })
})