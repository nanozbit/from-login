<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --body: #ffffff;
  --text: #363636;
  --text-light: #898989;
  --primary: #1bbeff;
  --background-form: #fafafa;
  --input: #c5c5c5;
  --border: #bbbbbb;
  --padding: 16px 24px;
  --line-height: 24px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.section-form {
  box-sizing: border-box;
  border-radius: 3px 60px 3px 60px;
  background-color: var(--background-form);
  display: flex;
  padding: 60px;
  width: 500px;
  height: 600px;
  align-items: center;
  flex-direction: column;
}
</style>
