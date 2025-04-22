import {format} from "date-fns"

export function convertTime(time){
    return format(new Date(time * 1000), "HH:mm")
}

export function convertDate(time){
    console.log(format(new Date(time * 1000), "iiii, MMMM M, y"))
    return format(new Date(time * 1000), "iiii, MMMM d, y")
}

export function convertCondition(icon){
    if(icon == "partly-cloudy-night" || icon == "partly-cloudy-day"){
        return 'Few Clouds'
    }

    else if(icon == 'rain-snow-showers-day' || icon == 'rain-snow-showers-night' || icon == icon == 'rain-snow'){
        return 'Rain with snow'
    }

    else if(icon == 'thunder-rain'){
        return 'Thunder with rain'
    }

    else{
        const splitIcon = icon.split('-')
        return splitIcon[0].charAt(0).toUpperCase() + splitIcon[0].slice(1)
    }


}