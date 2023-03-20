export function getTime(openingTime = null, closingTime = 22) {
  const date = new Date()

  // if the res. has an opening hour check with it as well
  // we assume res. ends the delivery at 10pm.

  let hours = []
  let hour = date.getHours()
  let minute = date.getMinutes()
  if (minute % 15 === 0) {
    return
  } else {
    minute = minute - (minute % 15) + 15
  }

  let hourValue = ''
  let initialHour = `${hour}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`

  while (hour < closingTime) {
    if (minute === 60) {
      hour++
      minute = 0
    }
    hourValue = `${hour}:${minute === 0 ? '00' : minute}`
    hours.push(hourValue)
    minute += 15
  }
  const deliveryTimes = [
    { value: initialHour, label: 'As soon as possible' },
    ...hours.map(hour => ({ value: hour, label: hour }))
  ]

  return { deliveryTimes, initialHour }
}
