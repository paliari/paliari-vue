# Lib
---

## Dialogs

Usage in component:

```javascript
this.$dialogs.alert('Alterado com sucesso').then(() => {/* Do something heer */})

this.$dialogs.confirm('Tem certeza que deseja sair?', 'Confirmação', 'NÃO', 'SIM')
.then(() => { console.log('confirmed') })
.catch(() => { console.log('canceled') })

this.$dialogs.prompt('Tem certeza que deseja sair?', 'Confirmação')
.then((input) => { console.log('Input: ', input) })
.catch(() => { console.log('canceled') })
```
