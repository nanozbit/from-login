<template>
  <header>
    <img src="../assets/Todo-Legal.png" alt="" />
  </header>
  <section class="section-form">
    <h1 class="title-form">Bienvenido</h1>
    <hr />
    <p>
      Ingrese los siguientes datos para registrase como un nuevo usuario
    </p>
    <br />
    <InputComponent
      v-bind:typeInput="'text'"
      v-bind:placeHolder="'Cedula de Identidad'"
      v-model="model.username"
    ></InputComponent>
    <br />
    <InputComponent
      v-bind:typeInput="'text'"
      v-bind:placeHolder="'Contrasena'"
      v-model="model.password"
    ></InputComponent>
    <br>
    <InputComponent
      v-bind:typeInput="'text'"
      v-bind:placeHolder="'Confirmar contrasena'"
      v-model="model.reenterpassword"
    ></InputComponent>
    <br />
    
    <ButtonLinkComponent v-on:click="registerUsers(model)" :nameButton="'Registrar'">
    </ButtonLinkComponent>
  </section>
  <footer>Gestor de procesos by <strong>Todo.Legal</strong></footer>
</template>

<script>
import InputComponent from "./inputs/InputComponent.vue";
import ButtonLinkComponent from "./button/ButtonLinkComponent.vue";
import { RegisterModel } from "../model/RegisterModel";
import { registerUsers } from "../service/ServiceProvider";


export default {
  name: "Register",
  components: { InputComponent, ButtonLinkComponent },
  data() {
    return { model: RegisterModel, register: registerUsers};
  }

};
</script>

<style >
img {
  width: 300px;
}
a {
  color: black;
  text-decoration: none;
}
hr {
  width: 170px;
  border: 2px solid black;
  margin: 25px;
}
p {
  font-size: 18px;
  text-align: center;
}
footer {
  margin: 25px;
}


.title-form {
  font-size: 40px;
}

.link-name {
  font-size: 14px;
  padding: 30px;
}
</style>