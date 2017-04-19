<template>
<div class="modal-demo">
  Show a full screen modal
  <p>Properties</p>
  <ul>
    <li><b>title</b> - The modal title</li>
    <li><b>show</b> - A required boolean to show/hide the modal</li>
    <li><b>cancelLabe</b> - Label for the cancel button</li>
    <li><b>okLabel</b> - Label for the ok button</li>
    <li><b>permitSuccess</b> - If true the ok button will be disasbled</li>
  </ul>
  Usage example
  <pre>&lt;modal :show="showModal"&gt;&lt;/modal&gt;</pre>
  <button class="pure-button" type="button" @click="showModal = true">Show Modal</button>
  <modal :show="showModal" @close="showModal = false" title="Modal example">
    <h1>Modal html content</h1>
  </modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="stylus">
.modal-demo
  nav
    background-color #D1AF81
</style>
