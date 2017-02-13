# Lib
---

## Dialogs

Usage in component:

```javascript
this.$dialogs.alert('Alterado com sucesso').then(() => {/* Do something heer */})

this.$dialogs.confirm('Tem certeza que deseja sair?', 'Confirmação')
.then(() => { console.log('confirmed') })
.catch(() => { console.log('canceled') })
```
