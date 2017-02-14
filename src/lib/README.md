# Lib
---

## Dialogs

Usage in component:

```javascript
this.$dialogs.alert('Alterado com sucesso').then(() => {/* Do something heer */})

this.$dialogs.confirm('Tem certeza que deseja sair?', 'Confirmação', 'NÃO', 'SIM')
.then((p) => {
  if (p) {
    console.log('confirmed')
  }
})


this.$dialogs.prompt('Tem certeza que deseja sair?', 'Confirmação')
.then((input) => {
  if (input) {
    console.log('Input: ', input)
  }
})
```
