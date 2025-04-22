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
  const filteredData = {
    address: data.resolvedAddress,
    temp: data.currentConditions.temp,
    time: data.currentConditions.datetimeEpoch,
    conditions: data.currentConditions.conditions,
    tempmax: data.days[0].tempmax,
    tempmin: data.days[0].tempmin,
    precipprob: data.currentConditions.precipprob,
    uvindex: data.currentConditions.uvindex,
    windspeed: data.currentConditions.windspeed,
    visibility: data.currentConditions.visibility,
    humidity: data.currentConditions.humidity,
    feelsLike: data.currentConditions.feelslike,
    icon: data.currentConditions.icon,
  };

  return filteredData;
}


export async function fetchData(input){
  const apiData = await fetchWeather(input)

  return processWeatherData(apiData)
}
