<template>
  <label>{{ label }}</label>
  <input
      :placeholder="label"
      :style="{ borderColor: error ? 'red' : ''}"
      :value="modelValue"
      aria-invalid='error ? true : null'
      class="field"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"

  >
  <p
      v-if="error"
      class="errorMessage"
      aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type:String,
      default:''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  input {
    padding: 5px;
  }
  p {
    color: red;
    font-size: 10px;
  }
</style>