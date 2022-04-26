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
import "./tooltip.sass"
import { keepInViewer } from '../../util/helpers'

const props = defineProps({
  raw: { type: Boolean, default: false },  // if true, dont show arrow or design
  color: String
})

var tooltip = ref(null)
var visible = ref(false)
var left = ref(0)
var top = ref(0)
var arrowX = ref(null)
var arrowY = ref(null)
var parent = ref(null)

async function setPosition() {
  await nextTick()

  var gap = props.raw ? 0 : 10 // px

  var kiv = keepInViewer(parent.value, tooltip.value, { gap })
  top.value = kiv.top
  left.value = kiv.left

  arrowX.value = kiv.arrowX
  arrowY.value = kiv.arrowY
}

onMounted(() => {
  parent.value = tooltip.value.parentElement
  // bind events to the parent to make the tooltip visible on mouseenter
  parent.value.onmouseenter = () => {
    visible.value = true
    setPosition()
  }
  parent.value.onmouseleave = () => {
    visible.value = false
  }
})
</script>
