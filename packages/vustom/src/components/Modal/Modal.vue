<template>

  <div class="modal" :class="[visible ? 'visible' : '']">

    <transition name="slide-top">

      <div
        v-if="visible"
        class="modal-card"
        :class="[
          visible ? 'visible' : ''
        ]"
        v-click-outside="outside">

        <div class="modal-card__header">
          <div class="modal-card__header-title">
            <slot name="title"></slot>
          </div>
          <div class="modal-card__header-close">
            <bouton
              v-ripple="false"
              :color="closeActive ? 'danger inverted' : ''"
              iconly rounded transparent
              class="modal-close"
              @click="close()">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </bouton>
          </div>
        </div>

        <div class="modal-card__body">
          <slot></slot>
        </div>

        <div class="modal-card__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>

      </div>

    </transition>

  </div>

</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
  visible: Boolean
})

var closeActive = ref(false)

function close() {
  emit('close')
}

function outside() {
  closeActive.value = true
  window.setTimeout(() => {
    closeActive.value = false
  }, 200)
}
</script>
