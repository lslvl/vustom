<template>

  <div class="field-container">

    <div class="field" :class="[
      color,
      errors ? 'danger' : '',
      disabled ? 'disabled' : ''
    ]">
      <div class="field-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="field-control">
        <label :for="id" :class="[
          focused ||
          (typeof modelValue === 'number' && modelValue > 0) ||
          (typeof modelValue === 'string' && modelValue.length > 0) ||
          placeholder.length ? '' : 'inside'
        ]">
          <span class="icon"></span>
          <slot></slot>
        </label>
        <div class="field-tip" v-if="$slots.tip">
          <slot name="tip"></slot>
        </div>
        <div class="field-control__body">
          <input
            :type="type"
            :id="id"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :min="min"
            :max="max"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="onFocus()"
            @blur="onBlur()"/>
        </div>
      </div>
      <div class="field-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>

    <div class="field-errors" v-if="errors">
      <div class="field-error" v-for="error in errors">
        <span>{{ error }}</span>
      </div>
    </div>

  </div>

</template>

<script setup>
import './field.sass'
import { computed, ref } from 'vue'

const props = defineProps({
  type: { type: String, default: 'text' },
  modelValue: { type: [String, Number] },
  id: String,
  placeholder: { type: String, default: '' },
  color: String,
  disabled: Boolean,
  errors: Array,
  min: Number,
  max: Number
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
