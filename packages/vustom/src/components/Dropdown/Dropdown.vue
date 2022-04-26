<template>

  <div
    class="dropdown-container"
    :class="[hoverable ? 'hoverable' : '']"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    ref="container">

    <div
      class="dropdown-activator"
      :class="{ 'active': visible }">
      <slot name="activator" :on="{ click: click }"></slot>
    </div>

    <div
      class="dropdown"
      :class="{ 'active': visible }"
      :style="['left:' + left + 'px;', 'top:' + top + 'px;']"
      ref="dropdown"
      v-if="visible"
      v-click-outside="hide">

      <slot></slot>

    </div>

  </div>

</template>

<script setup>
import { ref, nextTick  } from 'vue'
import './dropdown.sass'
import ClickOutside from '../../directives/click-outside'
import { keepInViewer } from '../../util/helpers'

const container = ref(null)
const dropdown = ref(null)

const props = defineProps({
  hoverable: Boolean
})

var visible = ref(false)
var left = ref(0)
var top = ref(0)

async function show() {
  visible.value = true
  setPosition()
}

function hide() {
  visible.value = false
}



async function setPosition() {
  await nextTick()

  var kiv = keepInViewer(container.value, dropdown.value)
  top.value = kiv.top
  left.value = kiv.left
}

function click() {
  !props.hoverable ? show() : false
}

function mouseEnter() {
  props.hoverable ? show() : false
}

function mouseLeave() {
  props.hoverable ? hide() : false
}
</script>
