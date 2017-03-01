import StringMask from 'string-mask'

const formats = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  phone: '(00) 90000-0000',
  cep: '00.000-000',
  placa: 'UUU-0000'
}

function formatter(value, format) {
  let str = new StringMask(format).apply(value)
  if (str.length < format.length && str.substr(-1) == format[str.length - 1]) {
    if ( ! /[09#ASUL\$]/.test(format[str.length - 1]) ) {
      str = str.substr(0, str.length - 1)
    }
  }
  return str.substr(0, format.length)
}

function clear(value, pattern) {
  if (!value) {return ''}
  return value.replace(pattern || /\D/g, '')
}

function size (format, full = false) {
  if ('cpfCnpj' == format) return full ? 18 : 14
  format = formats[format] || format
  return full ? format.length : clear(format, /[^09#ASUL\$]/g).length
}

export default formatter

export function cpf(value) {
  return formatter(clear(value), formats.cpf)
}
export function cnpj(value) {
  return formatter(clear(value), formats.cnpj)
}
export function cpfCnpj(value) {
  value = clear(value)
  let format = value.length > 11 ? formats.cnpj : formats.cpf
  return formatter(value, format)
}
export function phone(value) {
  return formatter(clear(value), formats.phone)
}
export function cep(value) {
  return formatter(clear(value), formats.cep)
}
export function placa(value) {
  return formatter(clear(value, /\W/g), formats.placa)
}
export { clear, formats, size }
