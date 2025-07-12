 function convertTemp() {
      const input = document.getElementById("tempInput").value.trim();
      const inputUnit = document.getElementById("inputUnit").value;
      const outputUnit = document.getElementById("outputUnit").value;
      const resultDisplay = document.getElementById("resultDisplay");

      if (isNaN(input)) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
      }

      const temp = parseFloat(input);
      let kelvin;

      // Convert input to Kelvin first
      if (inputUnit === "C") {
        kelvin = temp + 273.15;
      } else if (inputUnit === "F") {
        kelvin = (temp - 32) * (5 / 9) + 273.15;
      } else {
        kelvin = temp;
      }

      let result;

      // Convert from Kelvin to target unit
      if (outputUnit === "C") {
        result = kelvin - 273.15;
      } else if (outputUnit === "F") {
        result = (kelvin - 273.15) * (9 / 5) + 32;
      } else {
        result = kelvin;
      }

      resultDisplay.textContent = `Converted: ${result.toFixed(2)} °${outputUnit}`;
    }