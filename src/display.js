import { convertTime, convertDate, convertCondition } from "./formatter"


async function displayMainCard(data){
    const address = document.querySelector(".location-place")
    address.textContent = data.address

    const date = document.querySelector(".location-date")
    date.textContent = convertDate(data.time)

    const time = document.querySelector(".time")
    time.textContent = convertTime(data.time)

    const tempNow = document.querySelector(".temp-now")
    tempNow.textContent = `${Math.round(data.temp)}°c`

    console.log(tempNow.textContent)

    const tempStats = document.querySelector(".temp-stats")
    tempStats.textContent = `${Math.round(data.tempmin)}°c / ${Math.round(data.tempmax)}°c    |    ${convertCondition(data.icon)}`

    const icon = document.querySelector(".icon img")
    const source = await import(`./images/icons/${data.icon}.svg`)

    icon.src = source.default

}

function displayStats(data){

    const rainProp = document.querySelector(".rain-probability")
    rainProp.textContent = `${data.precipprob}%`

    const windSpeed = document.querySelector(".wind-speed")
    windSpeed.textContent = `${data.windspeed} Km/h`

    const airHumid = document.querySelector(".air-humidity")
    airHumid.textContent = `${data.humidity}%`

    const uvIndex = document.querySelector(".uv-index")
    uvIndex.textContent = `${data.uvindex}`

}

export function displayData(data){
    displayMainCard(data)
    displayStats(data)
}


// °c