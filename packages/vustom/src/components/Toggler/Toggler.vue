<template>
  <label
    class="toggler"
    :class="[
      loading ? 'loading' : '',
      disabled ? 'disabled' : '',
      color]">
    <input type="checkbox" :checked="checked">
    <span class="thumb"></span>
  </label>
</template>

<script setup>
const props = defineProps(['checked', 'color', 'disabled', 'loading'])
</script>
