Components
==========

---

Modal
-----

Properties

-	**title**: Modal title
-	**show**: Boolean to show/hide the modal
-	**ok-label**: String to label buttom OK
-	**cancel-label**: String to label buttom CANCEL
-	**permit-success**: Boolean to allow/disallow click on OK button

Events

-	**close**: Trigger when click in *ok* or *cancel*
-	**success**: Trigger when click in the *ok* button
-	**cancel**: Trigger when click in the *cancel* button

Usage

```html
<modal :show='showModal' title='Title' @close="showModal = false" @success='a_success_callback' @cancel='a_cancel_callback'>
  <div> Custom body </div>
</modal>
```

Spinner
-------

Properties

-	**loading**: Boolean to show/hide the spinner

```html
<spinner :loading="loadStatus == 'loading'"></sinner>
```

LoadManager
-----------

Show a spinner when the status is *loading*, a error message when the status is *failure* and an info message when*success* but no data found

Properties

-	**status**: String with the store status: loading, success, failure
-	**data-found**: Boolean to notify about no data found if false

```html
<load-manager :status='status' v-bind:data-found='true'></div>
```
