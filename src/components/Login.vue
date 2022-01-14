<template>
  <header>
    <img src="../assets/Todo-Legal.png" alt="" />
  </header>
  <section class="section-form">
    <h1 class="title-form">Bienvenido</h1>
    <hr />
    <p>
      Por favor Ingresa a tu cuenta ingresando tu numero de cedula y contrasena.
      Si no tienes cuenta en TodoLegal, puedes crear una gratis
    </p>
    <br />
    <InputTooltipComponent
      v-bind:typeInput="'text'"
      v-bind:placeHolder="'Cedula de Identidad'"
      v-model="model.username"
    ></InputTooltipComponent>
    <br />
    <InputComponent
      v-bind:typeInput="'password'"
      v-bind:placeHolder="'Password'"
      v-model="model.password"
    ></InputComponent>
    <br />

    <a href="/register" 
      ><span class="link-name" 
        >No tengo cuenta, crear una cuenta Gratis</span
      ></a
    >

    <ButtonLinkComponent v-on:click="login(model)" :nameButton="'Continuar'">
    </ButtonLinkComponent>
  </section>
  <footer>Gestor de procesos by <strong>Todo.Legal</strong></footer>
</template>

<script>
import InputComponent from "./inputs/InputComponent.vue";
import InputTooltipComponent from "./inputs/InputTooltipComponent.vue";
import ButtonLinkComponent from "./button/ButtonLinkComponent.vue";
import { LoginModel } from "../model/LoginModel";
import { loginUser, validationCI } from "../service/ServiceProvider";

export default {
  name: "Login",
  components: { InputComponent, InputTooltipComponent, ButtonLinkComponent },
  data() {
    return { model: LoginModel, login: loginUser, validationCI: validationCI };
  },
  mounted() {
    this.$nextTick(function () {
      localStorage.removeItem("access_token");
      this.validationCI({
        username: "1758711124-2",
        password: "TTes5t20s51**",
      });
    });
  },
 
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