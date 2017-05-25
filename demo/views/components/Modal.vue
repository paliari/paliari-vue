<template>
<div class="modal-demo">
  Show a full screen modal
  <p>Properties</p>
  <ul>
    <li><b>title</b> - The modal title</li>
    <li><b>show</b> - A required boolean to show/hide the modal</li>
    <li><b>cancel-label</b> - Label for the cancel button</li>
    <li><b>ok-label</b> - Label for the ok button</li>
    <li><b>permit-success</b> - If true the OK button will be disasbled</li>
    <li><b>header-background-color</b> - Background color for the modal header</li>
    <li><b>header-color</b> - Text color for the modal header</li>
  </ul>
  <p>Events</p>
  <ul>
    <li><b>cancel</b> - Emited when click on the CANCEL button</li>
    <li><b>success</b> - Emited when click on the OK button</li>
    <li><b>close</b> - Emited when click on CANCEL or OK</li>
  </ul>
  Usage example
  <pre>&lt;modal :show="showModal" @close="showModal = false"&gt;&lt;/modal&gt;</pre>
  <button type="button" @click="showModal = true">Show Modal</button>
  <modal :show="showModal" @close="showModal = false" title="Modal example">
    <h1>Modal html content</h1>
  </modal>
</div>
</template>

<script>
import Modal from '../../../src/components/Modal.vue'
export default {
  components: { Modal },
  data () {
    return {
      showModal: false
    }
  }
}
</script>
