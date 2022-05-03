<template>
  <div
    class="notification"
    @mouseenter="onMouseEnter($event)"
    @mouseleave="onMouseLeave($event)"
    @click="onClick()"
    :class="[
      theme,
      paused ? 'paused' : ''
    ]"
    v-ripple
  >
    <div class="notification-icon" v-if="theme">
      <svg v-if="theme == 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-if="theme == 'alert'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <svg v-if="theme == 'danger'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-if="theme == 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="notification-body">
      <h6 class="notification-title" v-if="title" v-html="title"></h6>
      <p class="notification-content" v-html="content"></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { emitter } from './events'
import { Timer } from '../../util/helpers'

const props = defineProps({
  id: null,
  title: '',
  content: '',
  theme: '',
  timer: null
})

const emits = defineEmits(['close'])

var paused = ref(false)

var own_timer = new Timer(close, 5000, props.id)

own_timer.start()

function onMouseEnter(e) {
  own_timer.pause()
  paused.value = true
}
function onMouseLeave(e) {
  paused.value = false
  own_timer.resume()
}
function onClick() {
  close()
}
function close() {
  own_timer.stop()
  emitter.emit('close', props.id)
}
</script>
