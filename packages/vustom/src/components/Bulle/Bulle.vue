<template>
    
    <div
        @click="onBulleClick($event)"
        @mouseleave="onBulleMouseLeave($event)"
        ref="bulleRef"
        v-show="visible"
        :style="['left:' + left + 'px;', 'top:' + top + 'px;']"
        class="bulle">
        <slot></slot>
        <input
            type="text"
            style="height:0;width:0;"
            ref="focusRef"
            @blur="onBulleBlur($event)">
    </div>

</template>

<script setup>
import { ref, toRefs, nextTick, watch, computed, onMounted, onUnmounted } from 'vue'
import { keepInViewer } from '../../util/helpers'

const props = defineProps({
    enter: Boolean,
    hover: Boolean,
    position: String,
    gap: { type: Number, default: 0 },
    activator: Object
})

var visible = ref(false)
var focusRef = ref(null)
var activator = null

var left = ref(0)
var top = ref(0)

onMounted(() => {
    activator = bulleRef.value.previousSibling
    activator.addEventListener('click', onActivatorClick, true)
    activator.addEventListener('mouseenter', onActivatorMouseEnter, true)
    activator.addEventListener('mouseleave', onActivatorMouseLeave, true)
})

onUnmounted(() => {
    activator.removeEventListener('click', onActivatorClick, true)
    activator.removeEventListener('mouseenter', onActivatorMouseEnter, true)
    activator.removeEventListener('mouseleave', onActivatorMouseLeave, true)
})

async function setPosition() {
  await nextTick()

  var args = {
    gap: props.gap,
    position: props.position || 'top'
  }

  var rect = bulleRef.value.previousSibling.getBoundingClientRect()

  var kiv = keepInViewer(rect, bulleRef.value, args)
  top.value = kiv.top
  left.value = kiv.left
}

var bulleRef = ref(null)
var hideTimer = null

function onBulleClick(e) {

    show()

    var element = e.target
    while(element) {
        if(element.dataset.bulleStop) {
            hide()
        }
        element = element.parentElement
    } 
}

function onBulleMouseLeave(e) {
    if(props.enter) {
        hide()
    }
}

function onBulleBlur() {
    // hack to have some ms to stop the timer if we click
    // inside the bulle. We want to prevent hide() from being
    // called with a click inside the bulle
    hideTimer = setTimeout(() => {
        hide()
    }, 150)
}

function onActivatorClick(e) {
    show()
}

function onActivatorMouseEnter(e) {
    if(props.hover || props.enter) {
        show()
    }
}

function onActivatorMouseLeave(e) {
    if(props.hover) {
        hide()
    }
}

async function show() {
    clearTimeout(hideTimer)
    visible.value = true
    setPosition()
    await nextTick()
    focusRef.value.focus()
}

function hide() {
    visible.value = false
}
</script>