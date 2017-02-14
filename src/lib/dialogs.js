export default {
  alert (message, title = '', buttonLabel = '') {
    return new Promise((resolve) => {
      if (navigator.notification) {
        navigator.notification.alert(message, resolve, title, buttonLabel)
      } else {
        window.alert(message)
        resolve()
      }
    })
  },

  confirm (message, title = '', cancelLabel = 'Cancelar', okLabel = 'OK') {
    return new Promise((resolve) => {
      if (navigator.notification) {
        navigator.notification.confirm(
          message,
          (buttonIndex) => { buttonIndex === 2 ? resolve(true) : resolve(false) },
          title,
          [cancelLabel, okLabel]
        )
      } else {
        window.confirm(message) ? resolve(true) : resolve(false)
      }
    })
  },

  prompt (message, title = '', cancelLabel = 'Cancelar', okLabel = 'OK') {
    return new Promise((resolve) => {
      if (navigator.notification) {
        navigator.notification.prompt(
          message,
          (response) => { response.buttonIndex === 2 ? resolve(response.input1) : resolve(false) },
          title,
          [cancelLabel, okLabel]
        )
      } else {
        ret = window.prompt(message)
        ret ? resolve(ret) : resolve(false)
      }
    })
  }
}
