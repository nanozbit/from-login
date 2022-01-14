<template>
  <div class="form-group-control">
    <input
      v-bind:type="typeInput"
      class="text-input"
      required
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label-control">
      <span class="label-name">{{ placeHolder }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  emits: ['update:modelValue'],
  props: {
    modelValue:{
      type:String,
      default: ''
    },
    typeInput: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

.form-group-control {
  width: 100%;
  height: 3.3em;
  max-width: 600px;
  min-width: 400px;
  display: block;
  position: relative;
  overflow: hidden;
}

.text-input {
  background-color: var(--input);
  border-radius: 3px;
  width: 100%;
  height: 100%;
  padding: 20px 15px 10px 15px;
  border: none;
  outline: 0;
  color: var(--text-primary);
}

.label-control {
  position: absolute;
  bottom: 0;
  height: 100%;
  left: 0;
  pointer-events: none;
  color: var(--text-primary);
  width: 100%;
}

.label-name {
  position: absolute;
  padding: 20px 15px 10px 15px;
  left: 0;
}

.form-group-control .text-input:valid,
.form-group-control .text-input:focus,
.form-group-control .text-input:hover {
  border: 1px solid var(--input);
  border-bottom: 2px solid var(--primary);
  box-shadow: 20px;
  border-radius: 3px 3px 0 0;
  background-color: white;
}

.form-group-control .text-input:focus + .label-control .label-name,
.form-group-control .text-input:valid + .label-control .label-name,
.form-group-control .text-input:hover + .label-control .label-name {
  transform: translateY(-20%);
  font-size: 14px;
  padding: 5px 0 0 15px;
  color: var(--primary);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>