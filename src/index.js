import "./styles.css";

import { fetchData } from "./api";
import { displayMainCard } from "./display";




const form = document.querySelector("form");

form.addEventListener("submit" ,async (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value
    const weatherData = await fetchData(input);
    displayMainCard(weatherData)

    console.log(weatherData)

})
