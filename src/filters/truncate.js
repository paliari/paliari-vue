export default (text, length = 30) => {
  return text.substr(0, length - 3) + '...'
}
