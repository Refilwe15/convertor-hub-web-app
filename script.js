// Handles tab switching
function openContent(evt, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// File transfer time calculator
function calculateTime() {
  const fileSize = parseFloat(document.getElementById("fileSize").value);
  const unit = document.getElementById("unit").value;
  const speed = parseFloat(document.getElementById("speed").value);
  const speedUnit = document.getElementById("speedUnit").value;

  let sizeInMb = (unit === "GB") ? fileSize * 1024 * 8 : fileSize * 8;
  let speedInMbps = (speedUnit === "MBps") ? speed * 8 : speed;

  const seconds = sizeInMb / speedInMbps;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);

  document.getElementById("file-result").innerText = 
    "Estimated transfer time: " + mins + " mins, " + secs + " seconds";
}

// Temperature conversion
function calculateTemp() {
  const tempValue = parseFloat(document.getElementById("temp").value);
  const tempUnitSelect = document.getElementById("tempUnit").value;
  let converted_value, resultText;

  if (isNaN(tempValue)) {
    resultText = "Please enter a valid number.";
  } else if (tempUnitSelect === "celcius") {
    converted_value = (tempValue * 9/5) + 32;
    resultText = "The converted value is: " + converted_value + " Fahrenheit";
  } else if (tempUnitSelect === "fahrenheit") {
    converted_value = (tempValue - 32) * 5/9;
    resultText = "The converted value is: " + converted_value + " Celsius";
  } else {
    resultText = "Invalid unit selected.";
  }

  document.getElementById("temp-result").innerText = resultText;
}

// Scientific notation converter
function scientificNotation() {
  const number = parseFloat(document.getElementById("science").value);

  let result;
  if (isNaN(number)) {
    result = "Please enter a valid number.";
  } else {
    result = "Result: " + number.toExponential();
  }

  document.getElementById("sci-result").innerText = result;
}

// Placeholder for metric prefix conversion
function metricPrefix() {
  const value = parseFloat(document.getElementById("metric").value);
  const fromUnit = document.querySelectorAll("#metrix select")[0].value;
  const toUnit = document.querySelectorAll("#metrix select")[1].value;

  const unitFactors = {
    "Kilo(k)": 10,
    "mega(M)": 1e6,
    "milli(m)": 1e-3,
    "nano": 1e-9
  };

  let resultText;
  if (isNaN(value)) {
    resultText = "Please enter a valid number.";
  } else {
    const converted = value * unitFactors[fromUnit] / unitFactors[toUnit];
    resultText = "Result: " +converted;
  }

  document.getElementById("metric-result").innerText = resultText;
}
