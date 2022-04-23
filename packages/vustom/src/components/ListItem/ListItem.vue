<template>
  <div
    v-ripple
    class="list-item"
    :class="[disabled ? 'disabled' : '', color]">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import './list_item.sass'

const props = defineProps(['color', 'disabled'])
</script>
