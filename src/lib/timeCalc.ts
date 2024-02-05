export function getTimeDiff(givenDate: string, type: "lastfm" | "trakt") {
  const givenDatetime =
    type === "trakt" ? new Date(`${givenDate}`) : new Date(`${givenDate} UTC`)
  const currentDatetime = new Date()

  const timeDifferenceInMilliseconds =
    currentDatetime.valueOf() - givenDatetime.valueOf()

  const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000

  const secondsInMinute = 60
  const secondsInHour = secondsInMinute * 60
  const secondsInDay = secondsInHour * 24

  const daysAgo = Math.floor(timeDifferenceInSeconds / secondsInDay)
  const hoursAgo = Math.floor(
    (timeDifferenceInSeconds % secondsInDay) / secondsInHour,
  )
  const minutesAgo = Math.floor(
    ((timeDifferenceInSeconds % secondsInDay) % secondsInHour) /
      secondsInMinute,
  )

  if (daysAgo === 0 && hoursAgo === 0) {
    if (type === "trakt" && minutesAgo < 10) {
      return "Currently Watching"
    }
    if (minutesAgo === 1) {
      return `${minutesAgo} min ago`
    }
    return `${minutesAgo} mins ago`
  }
  if (daysAgo === 0) {
    if (hoursAgo === 1) {
      return `${hoursAgo} hour ago`
    }
    return `${hoursAgo} hours ago`
  }
  if (daysAgo === 1) {
    return `${daysAgo} day ago`
  }
  return `${daysAgo} days ago`
}
