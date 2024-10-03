const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFH");
const toCelsius = document.getElementById("toCS");
const result = document.getElementById("result");

function convert() {
    let temp = parseFloat(textBox.value);

    if (toFahrenheit.checked) {
        // Convert Celsius to Fahrenheit: (C * 9/5) + 32
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        // Convert Fahrenheit to Celsius: (F - 32) * 5/9
        let celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Select a unit";
    }
}
