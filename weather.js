function getWeather() {
  const api_key = '97db153be94ded80ea017886386a8faf';
  const city = document.querySelector('#city').value;
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error(`Error getting data ${error}`);
    })
}

function displayWeather(data) {
  const display = document.querySelector('h1');
  // Celcius = Kelvin - 273.15;
  const temp = (data.list[0].main.temp - 273.15).toFixed(1); 

  // Fahrenheit = C * 9/5 + 32
  const temp_fahrenheit = (temp * 9/5 + 32).toFixed(1);

  const tempColor = temp/50;

  display.innerHTML = `${temp} C ${temp_fahrenheit} F` ;
  document.querySelector('.color').style.backgroundColor = `rgb(230,30,30,${tempColor})`;
  console.log(`Data correctly received.`);
}

document.querySelector('#find').onclick = getWeather;

// If enter is pressed in text area it must click get weather button
document.querySelector('#city').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.querySelector('#find').click();
  }
});

