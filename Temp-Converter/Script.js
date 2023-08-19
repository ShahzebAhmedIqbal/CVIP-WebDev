const temperatureInput = document.getElementById('Temperature');
const unitInput = document.getElementById('Unit');
const convertToUnitInput = document.getElementById('ConvertToUnit');
const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result'); 

convertButton.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = unitInput.value;
    const toUnit = convertToUnitInput.value;

    if (fromUnit === 'C' && toUnit === 'F') {
        const fahrenheitValue = (temperature * 9/5) + 32;
        resultDiv.textContent = fahrenheitValue.toFixed(2) + ' °F'; 
    }else if(fromUnit === 'C' && toUnit === 'K'){
        const kelvinValue = temperature + 273.15;
        resultDiv.textContent = kelvinValue.toFixed(2) + ' °K'; 
    }
     else if (fromUnit === 'F' && toUnit === 'C') {
        const celsiusValue = (temperature - 32) * 5/9;
        resultDiv.textContent = celsiusValue.toFixed(2) + ' °C'; 
    } else if (fromUnit === 'F' && toUnit === 'K') {
        const kelvinValue = (temperature - 32) * 5/9 + 273.15;
        resultDiv.textContent = kelvinValue.toFixed(2) + ' °K'; 
    }
     else if (fromUnit === 'K' && toUnit === 'F') {
        const fahrenheitValue = (temperature-273.15) * 9/5 + 32;
        resultDiv.textContent = fahrenheitValue.toFixed(2) + ' °F'; 
    }else if (fromUnit === 'K' && toUnit === 'C') {
        const celsiusValue = temperature-273.15;
        resultDiv.textContent = celsiusValue.toFixed(2) + ' °C'; 
    }
    else {
        resultDiv.textContent = 'Invalid conversion'; 

    }
});