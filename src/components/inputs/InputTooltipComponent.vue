<template>
  <div class="form-group-control">
    <input
      v-bind:type="typeInput"
      class="text-input fa-lg"
      required
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label-control">
      <span class="label-name">{{ placeHolder }}</span>
    </label>
    <a href="#" @click="validationUser(modelValue)">
      <fas
        class="icon-tooltip tooltip"
        id="icon-toolpip"
        icon="info-circle"
        v-tooltip.bottom-end="{
          content: `${message}`,
          shown: isOpen,
          triggers: ['click', 'hover'],
        }"
        size="1x"
      />
    </a>

    <!-- <fas class="icon-tooltip tooltip" id="icon-toolpip" icon="info-circle" size="lg"/> -->
  </div>
</template>

<script>
import { registerUsers } from "../../service/ServiceProvider.js";
export default {
  name: "InputTooltipComponent",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    typeInput: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
    },
    username: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.modelValue,
      isOpen: false,
      message: "El numero de cedula es valido",
    };
  },
  methods: {
    validationUser(user) {
      registerUsers(user)
        .then((item) => item.json())
        .then((data) => {
          if (data.status === "ERROR")
            this.message = "EL numero de cedula esta registrado";
          else this.message = "El numero de cedula es valido";
        });
      // if(!){
      //   this.message = 'EL numero de cedula no esta registrado'
      // }
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
  border-radius: 3px 0 0 3px;
  width: 100%;
  height: 100%;
  padding: 25px 35px 10px 15px;
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

.form-group-control .text-input:focus + .icon-tooltip,
.form-group-control .text-input:valid + .icon-tooltip,
.form-group-control .text-input:hover + .icon-tooltip {
  color: var(--primary);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.icon-tooltip {
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 0;
  margin: 15px 10px 0 10px;
  color: var(--text-primary);
  background-color: transparent;
}

.btn {
  position: absolute;

  border: none;
  cursor: pointer; /* Mouse pointer on hover */
}
</style>