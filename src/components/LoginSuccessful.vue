<template>
  <header>
    <img src="../assets/Todo-Legal.png" alt="" />
  </header>
  <section class="section-form">
      <fas class="info-success" id="icon-success" icon="check-circle" size="4x"/>
    <h1 class="title-form">¡Validation Exitosa!</h1>
    <hr />
    <div class="card">
        <h2 class="card-title">Datos Verificados</h2>
        <hr class="line-title-card" />
        <h3>Nombres Apellidos</h3>
        <div>{{ `${userEntity.name} ${userEntity.lastname}`}}</div>
        <h3>Cedula de indentificacion</h3>
        <div>{{ userEntity.username}}</div>
    </div>
    <br />

    <ButtonLinkComponent
      v-on:click="returnLogin(model)"
      :nameButton="'Finalizar'"
    >
    </ButtonLinkComponent>

    <footer>Gestor de procesos by <strong>Todo.Legal</strong></footer>
  </section>
</template>

<script>
import router from "../router/index";
import {UserModel} from "../model/UserModel"
import ButtonLinkComponent from "./button/ButtonLinkComponent.vue";
export default {
  name: "LoginSuccessful",
  components: { ButtonLinkComponent },
  methods: {
    returnLogin: () => {
      router.push({ path: "/" });
    },
  },
  data(){
    return{
      userEntity: UserModel
    }
  },
   mounted() {
    this.$nextTick(function () {
      console.log(JSON.parse(localStorage.getItem("dataUser")));
      this.userEntity = JSON.parse(localStorage.getItem("dataUser"))
    });
  },
};
</script>

<style>
.card {
  box-sizing: border-box;
  border-radius: 3px 60px 3px 60px;
  background-color: white;
  display: flex;
  padding: 30px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.section-form{
  height: 700px;
}
.title-form{
    font-size: 30px;
}
.card-title {
    font-size: 20px;
}
.info-success{
    margin: 20px;
    color: rgb(50, 143, 6);
}

.line-title-card{
  margin: 10px 0  10px 0;
}
</style>