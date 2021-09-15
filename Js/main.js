var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');
var elResult = document.querySelector('.result');

function threefour(num = 0) {

  var result = '';

  if (num % 3 === 0 && num % 5 === 0 && num != 0) {
    result = 'fizzbuzz';
  } else if (num % 3 === 0 && num != 0) {
    result = 'fizz';
  } else if (num % 5 === 0 && num != 0) {
    result = 'buzz';
  } else {
    result = num;
  }

  return result;
}

elForm.addEventListener('submit', function (stop) {
  stop.preventDefault();

  var inputValue = Number(elInput.value.trim());

  elResult.textContent = `${threefour(inputValue)}`;

})