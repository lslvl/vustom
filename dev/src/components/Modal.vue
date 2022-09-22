<template>

  Modal

  <bouton @click="modal.visible = true">Open modal 1</bouton>

  <modal
    :visible="modal.visible"
    @close="close()">
    <template #title>
      Can I introduce myself ?
    </template>
    <span>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
    <template #footer>
      <bouton block color="danger" :loading="modal.loading" @click="submitAction()">Action</bouton>
    </template>
  </modal>

</template>

<script setup>
import { shallowRef } from 'vue'

const modal = shallowRef({
  visible: false,
  loading: false
})

function close() {
  modal.value.visible = false
  modal.value.loading = false
}

function submitAction() {
  modal.value.loading = true
  window.setTimeout(close, 1000)
}
</script>
