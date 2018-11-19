# Components

---

## Spinner

Properties

- **loading**: Boolean to show/hide the spinner

```html
<spinner :loading="loadStatus == 'loading'"></sinner>
```

## LoadManager

Show a spinner when the status is _loading_, a error message when the status is _failure_ and an info message when*success* but no data found

Properties

- **status**: String with the store status: loading, success, failure
- **data-found**: Boolean to notify about no data found if false

```html
<load-manager :status='status' v-bind:data-found='true'></div>
```
