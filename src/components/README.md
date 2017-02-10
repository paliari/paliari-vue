Components
==========

---

Modal
-----

Properties

-	**show**: Boolean to show/hide the modal
-	**confirm**: Boolean to show/hide buttons OK/CANCEL
-	**ok**: String to label buttom OK
-	**cancel**: String to label buttom CANCEL

Events

-	**close**: Trigger when click in *ok* or *cancel*
-	**success**: Trigger when click in the *ok* button
-	**cancel**: Trigger when click in the *cancel* button

Slots

-	**header**
-	**footer**: Default as OK/CANCEL button

Usage

```html
<modal :show='showModal' @close="showModal = false" @success='a_success_callback' @cancel='a_cancel_callback'>
  <b slot='header'> Custom header </b>
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
