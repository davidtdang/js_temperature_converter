function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
};

function convertKelvinToCelsius(kelvin) {
  return kelvin - 273.15;
};

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
};

function convertKelvinToFahrenheit(kelvin) {
  return 9/5 * (kelvin - 273.15) + 32;
}

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
};

function convertFahrenheitToKelvin(fahrenheit) {
  return 5/9 * (fahrenheit - 32) + 273.15
}
