import { format } from "date-fns";

export function convertDateTime(data) {
  const dateTime = new Date(`${data.date}T${data.time}`);

  const time = convertTime(dateTime);
  const date = convertDate(dateTime);

  return { time, date };
}

function convertTime(time) {
  return format(time, "H:mm");
}

function convertDate(date) {
  return format(date, "iiii, MMMM d, y");
}

export function convertDateShort(date) {
  const convertedDate = new Date(date);
  return format(convertedDate, "iii");
}

export function convertCondition(icon) {
  if (icon == "partly-cloudy-night" || icon == "partly-cloudy-day") {
    return "Few Clouds";
  } else if (
    icon == "rain-snow-showers-day" ||
    icon == "rain-snow-showers-night" ||
    (icon == icon) == "rain-snow"
  ) {
    return "Rain with snow";
  } else if (icon == "thunder-rain") {
    return "Thunder with rain";
  } else {
    const splitIcon = icon.split("-");
    return splitIcon[0].charAt(0).toUpperCase() + splitIcon[0].slice(1);
  }
}
