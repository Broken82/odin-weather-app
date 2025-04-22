import "./styles.css";

import { fetchData } from "./api";
import { displayData } from "./display";




const form = document.querySelector("form");

form.addEventListener("submit" ,async (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value
    const weatherData = await fetchData(input);
    displayData(weatherData)


    console.log(weatherData)

})
