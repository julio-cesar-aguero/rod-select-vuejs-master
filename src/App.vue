<template>
  <div class="contenedor">
    <transition name="fade">
      <Cabecera v-show="$store.state.immersiveMode"></Cabecera>
    </transition>
    <transition name="fade">
      <router-view />
    </transition>
    <transition name="fade">
      <PieDePagina v-show="$store.state.immersiveMode" />
    </transition>
  </div>
  
</template>

<script>
export default {
  name: "app",

  methods: {
    clickButton() {},
  },
};
</script>

<style scoped>
@import "assets/css/fuente.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~@fortawesome/fontawesome-free/css/brands.css";
@import "~@fortawesome/fontawesome-free/css/solid.css";
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body {
  font-family: "Lato", sans-serif;
  background-color: #f2f2f2;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.general__section {
  width: 100%;
  height: auto;
  padding-top: 50px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
</style>
