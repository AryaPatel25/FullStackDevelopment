const apiKey = 'e73dd852d6664c99a301188c90b6850c'; // Replace with your actual OpenWeatherMap API key

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      document.getElementById("weatherResult").innerHTML = `
        <p><strong>City:</strong> ${name}</p>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
      `;
    })
    .catch(err => {
      document.getElementById("weatherResult").innerHTML = `<p>Error: ${err.message}</p>`;
    });
});
