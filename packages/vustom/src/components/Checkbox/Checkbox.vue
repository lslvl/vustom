<template>

  <div class="checkbox" :class="[color]">
    <input :id="id" type="checkbox" :checked="checked" />
    <label :for="id">
      <span class="icon">✓</span>
    </label>
  </div>

</template>

<script setup>
const props = defineProps(['id', 'checked', 'color', 'disabled'])
</script>
