<template>
  <div class="container__Cabecera">
    <header id="header" :class="[show ? 'header-show' : 'header-hide']">
      <div class="container__logo">
        <a @click="to('/')">
          <img loading="lazy" id="logorod" src="../assets/logo_1.png" alt="logo" title="Rod Select Logo" />
        </a>

        <div class="container__menu-button" @click="show_hide">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="container__nav">
        <nav>
          <ul class="ul-show" v-show="(show | showHeader)">
            <li>
              <a class="link" @click="to('/cotizador')">Cotiza</a>
            </li>
            <div class="menu-show">
              <li>
                <a class="link" href="#nosotros">Nosotros</a>
              </li>
              <li><a class="link" href="#marcas">Marcas</a></li>
              <li>
                <a class="link" href="#beneficios">Beneficios</a>
              </li>
              <li>
                <a class="link" href="#proyectos_especiales">Proyectos</a>
              </li>
              <li>
                <a class="link" href="#clientes">Clientes</a>
              </li>
            </div>

          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Cabecera',
  data() {
    return {
      cabecera: true,
      show: false,
      showHeader: false,
      showMenu: false
    }
  },

  created() {


    window.addEventListener("resize", this.myEventHandler);
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 1;
      if (bottomOfWindow) {
        // ...
        //this.$router.go(1)
      }
    }


  },
  mounted() {
    if ( window.innerWidth > 739) {
      
      this.show = true;
      this.showHeader = true;

    } else if ( window.innerWidth < 739) {
      
      this.show = false;
      this.showHeader = false;

    }
  }
  ,
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  }
  ,
  methods: {
    show_hide: function () {
      this.show = !this.show;
      this.showHeader = this.show;
    },
    to(ruta) {
      if (ruta == '/cotizador') {
        this.changeMode();
        if (this.showMenu == true) this.showMenu = false;
        this.$router.push(ruta)
      } else {
        if (this.showMenu == false) this.showMenu = true;
        this.$router.push(ruta);
      }

    },
    changeMode() {
      this.$store.dispatch('changeModeAction')
    }
    ,
    myEventHandler(e) {
      // your code for handling resize...

      if (window.innerWidth > 739) {
        this.show = true;
        this.showHeader = true;

      }else if ( window.innerWidth < 739) {
      this.show = false;
      this.showHeader = false;

    }

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

body {
  font-family: "Lato", sans-serif;
}

header {
  font-family: "Lato", sans-serif;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f2;

  color: aliceblue;
  box-shadow: rgba(0, 0, 0, 0.151) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(204, 29, 29, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: cubic-bezier(0.23, 1, 0.32, 1) 1s;
}

header:hover {
  transform: scale(1.0105);
}

h2 {
  color: red;
}

.container__Cabecera {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 0 10px;
  border-radius: 5px;
  overflow: hidden;
}

.container__logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container__menu-button {
  color: black;
  width: 47px;
  height: 32px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background 300ms;
  display: none;
}

.container__nav {
  position: relative;
  width: 60%;
  height: 70%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

nav ul,
.menu-show {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;
}

nav ul li {
  font-size: 20px;
  padding: 0 0.3em;
  list-style: none;
}

.link {
  cursor: pointer;
  font-weight: 500;
  font-size: 21px;
  color: black;
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;
}

.link:hover {
  font-size: 24px;
  text-decoration: underline;
  text-shadow: 0px 0px 1px black;
}

.nav_mod {
  height: 70px;
  box-shadow: 1xp 1px 10px 0px #00000010;
}

/* responsive */
@media (max-width: 1200px) {
  header {
    flex-direction: column;
    height: 130px;
  }

  .container__nav {
    justify-content: center;
  }

}

@media (max-width: 845px) {
  nav ul {
    margin: 0 auto;
    width: 70%;
    padding-top: 0.5em;
  }
}

@media (max-width: 739px) {
  header {
    height: auto;
  }

  .container__logo {
    width: 100%;
  }

  #logorod {
    transform: scale(0.7);
  }

  .container__menu-button {
    display: block;
  }

  .container__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }

  nav ul,
  .menu-show {
    padding-top: 0.1em;
    flex-direction: column;
  }

  .header-show {
    height: auto;
  }

  .header-hide {
    height: 67px;
  }

  .ul-show {
    display: flex;
  }

  .ul-hide {
    display: none;
  }

  .link {
    margin: 0.25em;
    display: flex;
    text-align: center;
    font-size: 0.92em;
  }
}

@media (max-width: 430px) {
  #logorod {
    transform: scale(0.6);
  }

  .header-hide {
    height: 62px;
  }

  .link {
    font-size: 0.89em;
    margin: 0.2em;
  }
}
</style>