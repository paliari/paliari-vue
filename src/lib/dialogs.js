export default {
  alert (message, title = '', buttonLabel = '') {
    return new Promise((resolve, reject) => {
      if (navigator.notification) {
        navigator.notification.alert(message, resolve, title, buttonLabel)
      } else {
        window.alert(message)
        resolve()
      }
    })
  },
  confirm (message, title = '', cancelLabel = 'Cancelar', okLabel = 'OK') {
    return new Promise((resolve, reject) => {
      if (navigator.notification) {
        navigator.notification.confirm(
          message,
          (buttonIndex) => { buttonIndex === 2 ? resolve() : reject() },
          title,
          [cancelLabel, okLabel]
        )
      } else {
        window.confirm(message) ? resolve() : reject()
      }
    })
  }
}
