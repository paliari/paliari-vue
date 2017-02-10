import fecha from 'fecha'

fecha.i18n.dayNamesShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
fecha.i18n.dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
fecha.i18n.monthNamesShort = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
fecha.i18n.monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

fecha.masks.default = 'DD/MM/YYYY HH:mm:ss'
fecha.masks.date = 'DD/MM/YYYY'
fecha.masks.time = 'HH:mm:ss'
fecha.masks.dateTime = 'DD/MM/YYYY HH:mm:ss'
fecha.masks.shortDate = 'DD/MM/YY'
fecha.masks.shortTime = 'HH:mm'
fecha.masks.shortDateTime = 'DD/MM/YY HH:mm'
fecha.masks.json = 'YYYY-MM-DDTHH:mm:ss'

export default fecha
