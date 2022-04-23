<template>

  <div class="input-container">

    <div class="input" :class="[
      color,
      errors ? 'danger' : '',
      disabled ? 'disabled' : ''
    ]">
      <div class="input-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="input-control">
        <label :for="id" :class="[
          focused || modelValue.length || placeholder.length ? '' : 'active'
        ]">
          <span class="icon"></span>
          <slot></slot>
        </label>
        <div class="input-tip" v-if="$slots.tip">
          <slot name="tip"></slot>
        </div>
        <div class="input-control__body">
          <input
            type="text"
            :id="id"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="onFocus()"
            @blur="onBlur()"/>
        </div>
      </div>
      <div class="input-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>

    <div class="input-errors" v-if="errors">
      <div class="input-error" v-for="error in errors">
        <span>{{ error }}</span>
      </div>
    </div>

  </div>

</template>

<script setup>
import './input_text.sass'
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: String,
  placeholder: { type: String, default: '' },
  color: String,
  disabled: Boolean,
  errors: Array
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

var focused = ref(false)

function onFocus() {
  focused.value = true
}
function onBlur() {
  focused.value = false
}
</script>
