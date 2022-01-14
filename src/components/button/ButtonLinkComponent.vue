<template>
  <div class="button-control">
    <a  href="#"> <span class="name-button">{{ nameButton }}</span><fas class="icon-button" id="icon-button" icon="arrow-alt-circle-right" size="lg"/></a>
  </div>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    nameButton: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.button-control {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 25px 0 0 25px ;
}
.name-button{
    font-size: 30px;
    font-weight: bold;
}
.icon-button{
    margin: 0 0 0 10px;
    color: black;
}
</style>