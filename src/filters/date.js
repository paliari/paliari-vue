import Fecha from '../lib/fecha'

export default (date, format = 'shortDateTime') => {
  try {
    date = Fecha.parse(date, 'YYYY-MM-DDTHH:mm:ssZZ') || date
    return Fecha.format(date, format)
  } catch (e) {
    return date
  }
}
