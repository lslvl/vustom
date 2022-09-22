<template>

  <!-- we need to force render {{ contextmenuInfo }} to activate computed value -->
  <span style="display:none">{{ contextmenuInfo }}</span>

  <template
    ref="activator"
    class="dropdown-activator"
    :class="{ 'active': visible }"
    :style="activatorDisplay ? 'display:'+activatorDisplay : ''"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">
    <slot name="activator" :on="{ click: click }"></slot>
  </template>

  <template v-if="$slots.contextmenu" ref="menu">
    <slot name="contextmenu" :on="{ contextmenu: onContextmenu }"></slot>
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
import { ref, toRefs, nextTick, watch, computed, onMounted, onUnmounted } from 'vue'
import ClickOutside from '../../directives/click-outside'
import { keepInViewer } from '../../util/helpers'
import { debounce, throttle } from 'lodash'

const activator = ref(null)
const menu = ref(null)
const dropdown = ref(null)

const props = defineProps({
  hoverable: Boolean,
  position: String,
  contextmenu: null
})

const emit = defineEmits(['hide'])

var visible = ref(false)
var left = ref(0)
var top = ref(0)
var maxHeight = ref('')

var activatorDisplay = ref('')

var contextmenuInfo = computed(() => {
  var values = props.contextmenu
  if(values && values.left > 0 && values.top > 0) {
    visible.value = true
    left.value = values.left
    top.value = values.top
  } else {
    visible.value = false
  }
  return values
})

watch(visible, (newValue, oldValue) => {
  if(newValue) {
    document.addEventListener('scroll', hide, true)
  }
})

watch(activator, (newValue, oldValue) => {
  if(newValue && newValue.children && newValue.children[0]) {
    activatorDisplay.value = newValue ? window.getComputedStyle(newValue.children[0]).display : ''
  }
})

function show(e = null) {
  visible.value = true
  if(!e) {
    activator.value.children[0].classList.add('active')
  }
  setPosition(e)
}

function hide() {
  document.removeEventListener('scroll', hide, true)
  emit('hide')
  if(activator.value && activator.value.children && activator.value.children[0]) {
    activator.value.children[0].classList.remove('active')
  }
  visible.value = false
}

async function setPosition(e = null) {
  await nextTick()

  var args = {
    position: props.position || 'bottom right',
  }

  if(e) {
    var rect = {
      top: e.clientY,
      left: e.clientX,
      width: 1,
      height: 1,
    }
  } else {
    var rect = activator.value.getBoundingClientRect()
  }

  var kiv = keepInViewer(rect, dropdown.value, args)
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

async function onContextmenu(e) {
  show(e)
}
</script>
