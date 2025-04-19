


export async function displayMainCard(data){
    const address = document.querySelector(".location-place")
    address.textContent = data.address

    const time = document.querySelector(".time")
    time.textContent = data.time

    const tempNow = document.querySelector(".temp-now")
    tempNow.textContent = `${Math.round(data.temp)}°c`

    console.log(tempNow.textContent)

    const tempStats = document.querySelector(".temp-stats")
    tempStats.textContent = `${Math.round(data.tempmin)}°c / ${Math.round(data.tempmax)}°c`

    const icon = document.querySelector(".icon img")
    const source = await import(`./images/icons/${data.icon}.svg`)

    icon.src = source.default

    




}


// °c