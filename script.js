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

      const seconds = sizeInMb / speedInMbps;
      const mins = Math.floor(seconds / 60);
      const secs = Math.round(seconds % 60);

      document.getElementById("result").innerText = 
        `Estimated transfer time: ${mins} minutes, ${secs} seconds`;
    }