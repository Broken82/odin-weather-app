async function fetchWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=2TEYHXVPXCFY3LUXMH3YTK5TJ&contentType=json`,
      {
        mode: "cors",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function processWeatherData(data) {
  const dataToday = {
    address: data.resolvedAddress,
    temp: data.currentConditions.temp,
    date: data.days[0].datetime,
    time: data.currentConditions.datetime,
    conditions: data.currentConditions.conditions,
    tempmax: data.days[0].tempmax,
    tempmin: data.days[0].tempmin,
    precipprob: data.days[0].precipprob,
    uvindex: data.days[0].uvindex,
    windspeed: data.days[0].windspeed,
    visibility: data.days[0].visibility,
    humidity: data.days[0].humidity,
    feelsLike: data.days[0].feelslike,
    icon: data.days[0].icon,
  };

  const dataForecast = [];

  for (let i = 1; i < 6; i++) {
    let forecastData = {
      date: data.days[i].datetime,
      icon: data.days[i].icon,
      conditions: data.days[i].conditions,
      tempmax: data.days[i].tempmax,
      tempmin: data.days[i].tempmin,
    };

    dataForecast.push(forecastData);
  }

  return { dataToday, dataForecast };
}

export async function fetchData(input) {
  const apiData = await fetchWeather(input);

  return processWeatherData(apiData);
}
