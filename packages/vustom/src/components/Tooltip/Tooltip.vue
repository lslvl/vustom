<template>

  <div
    v-show="visible"
    class="tooltip"
    :class="[
      visible ? 'active' : '',
      raw ? 'raw' : '',
      color
    ]"
    ref="tooltip"
    :style="['left:' + left + 'px;', 'top:' + top + 'px;']">

    <div class="tooltip-inner">
      <slot></slot>
    </div>

    <span class="tooltip-arrow" :class="[
      arrowX,
      arrowY
    ]"></span>

  </div>

</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { keepInViewer } from '../../util/helpers'

const props = defineProps({
  raw: { type: Boolean, default: false },  // if true, dont show arrow or design
  color: String,
  delay: Number,
  position: String
})

var tooltip = ref(null)
var visible = ref(false)
var left = ref(0)
var top = ref(0)
var arrowX = ref(null)
var arrowY = ref(null)
var parent = ref(null)

var timer = ref(null)

async function setPosition() {
  await nextTick()

  var args = {
    gap: 10,
    position: props.position || 'top'
  }


  var kiv = keepInViewer(parent.value, tooltip.value, args)
  top.value = kiv.top
  left.value = kiv.left

  arrowX.value = kiv.arrowX
  arrowY.value = kiv.arrowY
}

onMounted(() => {
  parent.value = tooltip.value.parentElement
  // bind events to the parent to make the tooltip visible on mouseenter
  parent.value.onmouseenter = () => {
    show()
  }
  parent.value.onmouseleave = () => {
    hide()
  }
})

function show() {
  if (props.delay) {
    timer.value = setTimeout(() => {
      visible.value = true
      setPosition()
    }, props.delay)
  } else {
    visible.value = true
    setPosition()
  }
}

function hide() {
  clearTimeout(timer.value)
  visible.value = false
}
</script>
