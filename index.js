const display = document.querySelector('.display');

function handleDigitClick(event) {
  const digit = event.target.textContent;
  let currentValue = display.textContent;

  // Check if the current value is '0' or the length is less than 9
  if (currentValue === '0' || currentValue.length < 9) {
    // If the current value is '0', replace it with the clicked digit
    // Otherwise, append the clicked digit
    display.textContent = currentValue === '0' ? digit : currentValue + digit;
  }
}

document.querySelectorAll('.btn-num').forEach(button => {
  button.addEventListener('click', handleDigitClick);
});

