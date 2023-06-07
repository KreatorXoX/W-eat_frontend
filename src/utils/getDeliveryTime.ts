// type GetTimeReturnType = {
//   deliveryTimes: OptionSelect[]
//   initialHour: string
// }

// export function getTime(
//   closingTime: number,
//   date: Date,
//   openingTime?: number
// ): GetTimeReturnType {
//   // if the res. has an opening hour check with it as well
//   // we assume res. ends the delivery at 10pm.

//   let hours = []
//   let hour = date.getHours()
//   let minute = date.getMinutes()

//   if (minute % 15 !== 0) {
//     minute = minute - (minute % 15) + 15
//   }

//   let hourValue = ''
//   let initialHour = `${hour}:${
//     date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
//   }`

//   while (hour < closingTime) {
//     if (minute === 60) {
//       hour++
//       minute = 0
//     }
//     hourValue = `${hour}:${minute === 0 ? '00' : minute}`
//     hours.push(hourValue)
//     minute += 15
//   }
//   const deliveryTimes: OptionSelect[] = [
//     { value: initialHour, label: 'As soon as possible' },
//     ...hours.map(hour => ({ value: hour, label: hour }))
//   ]

//   return { deliveryTimes, initialHour }
// }

// custom hook version
import { useState, useEffect } from "react";

type OptionSelect = {
  value: string;
  label: string;
};

type GetTimeReturnType = {
  deliveryTimes: OptionSelect[];
  initialHour: string;
};

const useDeliveryTimes = (
  closingTime: string,
  date: Date,
  openingTime?: string
): GetTimeReturnType => {
  const [deliveryTimes, setDeliveryTimes] = useState<OptionSelect[]>([]);

  useEffect(() => {
    let hours = [];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let closingHour = parseInt(closingTime.split(":")[0]);
    if (openingTime) {
      const [openingHour, openingMinute] = openingTime.split(":");
      if (
        hour < parseInt(openingHour) ||
        (hour === parseInt(openingHour) && minute < parseInt(openingMinute))
      ) {
        hour = parseInt(openingHour);
        minute = parseInt(openingMinute);
      }
    }

    if (minute % 15 !== 0) {
      minute = minute - (minute % 15) + 15;
    }

    let hourValue = "";

    while (hour < closingHour) {
      if (minute === 60) {
        hour++;
        minute = 0;
      }
      hourValue = `${hour}:${minute === 0 ? "00" : minute}`;
      hours.push({ value: hourValue, label: hourValue });
      minute += 15;
    }

    setDeliveryTimes([
      { value: "asap", label: "As soon as possible" },
      ...hours,
    ]);
  }, [closingTime, openingTime, date]);

  return { deliveryTimes, initialHour: "asap" };
};

export default useDeliveryTimes;
