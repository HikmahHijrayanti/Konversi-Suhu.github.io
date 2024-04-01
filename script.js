const temperatureInput = document.getElementById("temperature");
const inputUnitSelect = document.getElementById("inputUnit");
const outputUnitSelect = document.getElementById("outputUnit");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const inputUnit = inputUnitSelect.value;
  const outputUnit = outputUnitSelect.value;

  if (isNaN(temperature)) {
    resultDiv.textContent = "Masukkan suhu yang valid.";
    return;
  }

  if (inputUnit === outputUnit) {
    resultDiv.textContent = `${temperature} ${inputUnit}`;
    return;
  }

  let convertedTemperature;

  // Konversi dari satuan awal ke Celsius
  switch (inputUnit) {
    case "celsius":
      convertedTemperature = temperature;
      break;
    case "fahrenheit":
      convertedTemperature = ((temperature - 32) * 5) / 9;
      break;
    case "kelvin":
      convertedTemperature = temperature - 273.15;
      break;
    default:
      resultDiv.textContent = "Satuan suhu tidak valid.";
      return;
  }

  // Konversi dari Celsius ke satuan yang diinginkan
  switch (outputUnit) {
    case "celsius":
      convertedTemperature = convertedTemperature;
      break;
    case "fahrenheit":
      convertedTemperature = (convertedTemperature * 9) / 5 + 32;
      break;
    case "kelvin":
      convertedTemperature = convertedTemperature + 273.15;
      break;
    default:
      resultDiv.textContent = "Satuan suhu tidak valid.";
      return;
  }

  const resultText = `
    <div class="result-box">
      <p>${temperature} ${inputUnit} =</p>
      <p>${convertedTemperature.toFixed(2)} ${outputUnit}</p>
    </div>
  `;
  resultDiv.innerHTML = resultText;
});
