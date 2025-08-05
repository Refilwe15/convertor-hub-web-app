function openContent(evt, tabId) {
      const contents = document.querySelectorAll(".tab-content");
      contents.forEach(content => content.style.display = "none");

      document.getElementById(tabId).style.display = "block";
    }

    function calculateTime() {
      const fileSize = parseFloat(document.getElementById("fileSize").value);
      const unit = document.getElementById("unit").value;
      const speed = parseFloat(document.getElementById("speed").value);
      const speedUnit = document.getElementById("speedUnit").value;

      let sizeInMb = (unit === "GB") ? fileSize * 1024 * 8 : fileSize * 8;
      let speedInMbps = (speedUnit === "MBps") ? speed * 8 : speed;

      const seconds = (unit === "GB" ? fileSize * 1024 : fileSize) / (speedUnit === "MBps" ? speed : speed / 8);
      const mins = Math.floor(seconds / 60);
      const secs = Math.round(seconds % 60);

      document.getElementById("result").innerText = 
        "Estimated transfer time: " + mins + " mins, " + secs + " seconds";
    }
function calculateTemp() {
  const tempValue = parseFloat(document.getElementById("temp").value);
  const tempUnitSelect = document.getElementById("tempUnit").value;
  let converted_value, resultText;


  if (tempUnitSelect === "celcius") {
    converted_value = (tempValue * 9/5) + 32;
    resultText = "The converted value is : " + converted_value + " fahrenheit";
  } else if (tempUnitSelect === "fahrenheit") {
    converted_value = (tempValue - 32) * 5/9;
    resultText = "The converted value is : " + converted_value + " celcius";
  } else {
    resultText = "Invalid unit selected.";
  }

  document.querySelector('#temperature .result').innerText = resultText;
}  
    