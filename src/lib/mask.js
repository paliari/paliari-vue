import StringMask from 'string-mask'

function formatter(value, format) {
  let str = new StringMask(format).apply(value)
  if (str.length < format.length && str.substr(-1) == format[str.length - 1]) {
    if ( ! /[09#ASUL\$]/.test(format[str.length - 1]) ) {
      str = str.substr(0, str.length - 1)
    }
  }
  return str
}

function clear(value, pattern) {
  if (!value) {return ''}
  return value.replace(pattern || /\D/g, '')
}

export default formatter

export function cpf(value) {
  return formatter(clear(value), '000.000.000-00')
}
export function cnpj(value) {
  return formatter(clear(value), '00.000.000/0000-00')
}
export function cpfCnpj(value) {
  value = clear(value)
  let format = value.length > 11 ? '00.000.000/0000-00' : '000.000.000-00'
  return formatter(value, format)
}
export function phone(value) {
  return formatter(clear(value), '(00) 90000-0000')
}
export function cep(value) {
  return formatter(clear(value), '00.000-000')
}
export function placa(value) {
  return formatter(clear(value, /\W/g), 'UUU-0000')
}
export {clear}
