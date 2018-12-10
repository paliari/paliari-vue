export default Fecha => (date, format = 'shortDateTime') => {
  try {
    if ('string' === typeof date) {
      date = Fecha.parse(date, 'YYYY-MM-DDTHH:mm:ssZZ') || new Date(date)
    }
    return Fecha.format(date, format)
  } catch (e) {
    return date
  }
}
