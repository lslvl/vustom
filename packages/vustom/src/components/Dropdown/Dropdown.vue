<template>

  <template
    ref="activator"
    class="dropdown-activator"
    :class="{ 'active': visible }"
    :style="activatorDisplay ? 'display:'+activatorDisplay : ''"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">
    <slot name="activator" :on="{ click: click }"></slot>
  </template>

  <div
    class="dropdown"
    :class="{ 'active': visible }"
    :style="['left:' + left + 'px;', 'top:' + top + 'px;max-height:'+maxHeight+'px']"
    ref="dropdown"
    v-if="visible"
    v-click-outside="hide"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">

    <slot></slot>

  </div>

</template>

<script setup>
import { ref, toRefs, nextTick, watch } from 'vue'
import ClickOutside from '../../directives/click-outside'
import { keepInViewer } from '../../util/helpers'

const activator = ref(null)
const dropdown = ref(null)

const props = defineProps({
  hoverable: Boolean,
  position: String
})

var visible = ref(false)
var left = ref(0)
var top = ref(0)
var maxHeight = ref('')

var activatorDisplay = ref('')

watch(activator, (newValue, oldValue) => {
  activatorDisplay.value = newValue ? window.getComputedStyle(newValue.children[0]).display : ''
})

async function show() {
  visible.value = true
  activator.value.children[0].classList.add('active')
  setPosition()
}

function hide() {
  activator.value.children[0].classList.remove('active')
  visible.value = false
}

async function setPosition() {
  await nextTick()

  var args = {
    position: props.position || 'bottom right',
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
