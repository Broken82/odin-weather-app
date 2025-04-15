import "./styles.css"



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
    
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function processWeatherPromise(data){

  console.log(data)

  const address = data.resolvedAddress
  const temp = data.currentConditions.temp;
  const feelsLike = data.currentConditions.feelslike;
  const icon = data.currentConditions.icon;



  return {address, temp, feelsLike, icon}
}

 fetchWeather("Sława").then(res => {
  console.log(processWeatherPromise(res))
})






