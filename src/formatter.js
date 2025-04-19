import {format} from "date-fns"

export function convertTime(time){
    return format(new Date(time), "HH:mm")
}