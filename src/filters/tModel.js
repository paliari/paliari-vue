import i18n from '../lib/i18n'

export default (key, replaces) => {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key
  return i18n.hum(key, replaces)
}
