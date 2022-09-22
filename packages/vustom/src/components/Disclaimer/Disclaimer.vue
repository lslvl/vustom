<template>
  <div
    class="disclaimer"
    :class="[
      transparent ? 'transparent' : '',
      reverse ? 'reverse' : '',
      rounded ? 'rounded' : '',
      iconly ? 'iconly' : '',
      outlined ? 'outlined' : '',
      inverted ? 'inverted' : '',
      tiny ? 'tiny' : '',
      small ? 'small' : '',
      large ? 'large' : '',
      huge ? 'huge' : '',
      block ? 'bouton--block' : '',
      color,
      shadow ? 'shadow-'+shadow : '']">
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  color: String,
  transparent: Boolean,
  reverse: Boolean,
  iconly: Boolean,
  rounded: Boolean,
  outlined: Boolean,
  inverted: Boolean,
  tiny: Boolean,
  small: Boolean,
  large: Boolean,
  huge: Boolean,
  block: Boolean,
  shadow: String
})
</script>
