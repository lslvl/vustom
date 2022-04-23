<template>
  <div
    v-ripple
    class="bouton"
    :class="[
      loading ? 'loading' : '',
      disabled ? 'disabled' : '',
      color]"
    :disabled="disabled">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
import './bouton.sass'

const props = defineProps(['name', 'color', 'loading', 'disabled'])
</script>
