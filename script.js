const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Enter a Valid Weight`;
  } else if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter a Valid height`;
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${BMI}</span>`;
  }
});

// Under Weight = Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9
