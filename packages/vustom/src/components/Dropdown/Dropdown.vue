<template>

  <div
    class="dropdown-container"
    :class="[hoverable ? 'hoverable' : '']"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">

    <div
      class="dropdown-activator"
      :class="{ 'active': visible }"
      ref="activator">
      <slot name="activator" :on="{ click: click }"></slot>
    </div>

    <div
      class="dropdown"
      :class="{ 'active': visible }"
      :style="['left:' + left + 'px;', 'top:' + top + 'px;max-height:'+maxHeight+'px']"
      ref="dropdown"
      v-if="visible"
      v-click-outside="hide">

      <slot></slot>

    </div>

  </div>

</template>

<script setup>
import { ref, nextTick  } from 'vue'
import ClickOutside from '../../directives/click-outside'
import { keepInViewer } from '../../util/helpers'

const activator = ref(null)
const dropdown = ref(null)

const props = defineProps({
  hoverable: Boolean
})

var visible = ref(false)
var left = ref(0)
var top = ref(0)
var maxHeight = ref('')

async function show() {
  visible.value = true
  setPosition()
}

function hide() {
  visible.value = false
}

async function setPosition() {
  await nextTick()

  var args = {
    pref_x: 'right',
    pref_y: 'top'
  }

  var kiv = keepInViewer(activator.value, dropdown.value, args)
  top.value = kiv.top
  left.value = kiv.left
  maxHeight.value = kiv.maxHeight
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
