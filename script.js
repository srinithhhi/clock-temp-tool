// Clock Functionality
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const updateClock = () => {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  dateElement.textContent = dateString;
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(updateClock, 1000);
updateClock();

// Temperature Conversion
const tempInput = document.getElementById("tempInput");
const resultDisplay = document.getElementById("result");
const radios = document.querySelectorAll("input[name='conversionType']");

const convertTemperature = () => {
  const value = parseFloat(tempInput.value);
  if (isNaN(value)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  const selectedConversion = [...radios].find(r => r.checked).value;
  let result;

  if (selectedConversion === "CtoF") {
    result = (value * 9 / 5) + 32;
    resultDisplay.textContent = `${value}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (value - 32) * 5 / 9;
    resultDisplay.textContent = `${value}°F = ${result.toFixed(2)}°C`;
  }
};

tempInput.addEventListener("input", convertTemperature);
radios.forEach(radio => radio.addEventListener("change", convertTemperature));
