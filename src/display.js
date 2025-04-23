import {
  convertCondition,
  convertDateTime,
  convertDateShort,
} from "./formatter";

async function displayMainCard(data) {
  const address = document.querySelector(".location-place");
  address.textContent = data.address;

  const convertedDateTime = convertDateTime(data);

  const date = document.querySelector(".location-date");
  date.textContent = convertedDateTime.date;

  const time = document.querySelector(".time");
  time.textContent = convertedDateTime.time;

  const tempNow = document.querySelector(".temp-now");
  tempNow.textContent = `${Math.round(data.temp)}°c`;

  console.log(tempNow.textContent);

  const tempStats = document.querySelector(".temp-stats");
  tempStats.textContent = `${Math.round(data.tempmin)}°c / ${Math.round(data.tempmax)}°c    |    ${convertCondition(data.icon)}`;

  const icon = document.querySelector(".icon img");
  const source = await import(`./images/icons/${data.icon}.svg`);

  icon.src = source.default;
}

function displayStats(data) {
  const rainProp = document.querySelector(".rain-probability");
  rainProp.textContent = `${data.precipprob}%`;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = `${data.windspeed} Km/h`;

  const airHumid = document.querySelector(".air-humidity");
  airHumid.textContent = `${data.humidity}%`;

  const uvIndex = document.querySelector(".uv-index");
  uvIndex.textContent = `${data.uvindex}`;
}

function displayForecast(data) {
  const forecastList = document.querySelectorAll(".forecast");
  const temperatureList = document.querySelectorAll(".forecast-temperature");

  forecastList.forEach(async (forecast, i) => {
    const day = forecast.children[0];
    const icon = forecast.children[1];
    const condition = forecast.children[2];
    const tempLower = temperatureList[i].children[0];
    const tempHigher = temperatureList[i].children[1];

    day.textContent = convertDateShort(data[i].date);
    condition.textContent = convertCondition(data[i].icon);
    tempLower.textContent = `${Math.round(data[i].tempmin)}°c`;
    tempHigher.textContent = `${Math.round(data[i].tempmax)}°c`;

    const source = await import(`./images/icons/${data[i].icon}.svg`);
    icon.src = source.default;
  });
}

export function displayData(data) {
  displayMainCard(data.dataToday);
  displayStats(data.dataToday);
  displayForecast(data.dataForecast);
}