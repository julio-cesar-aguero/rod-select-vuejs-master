<template>
  <div class="general__section">
    <!-- pagina 3 -->
    <section id="cotizador-3">
      <div class="container__cotizador-2">
        <h2>¿Para cuántas personas es este regalo?</h2>
        <div class="cards">
          <div class="box" @click="handleOption(1)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>DE 50 A 500</span>
          </div>

          <div class="box" @click="handleOption(2)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>DE 501 A 2000</span>
          </div>

          <div class="box" @click="handleOption(3)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>DE 2001 A 5000</span>
          </div>

          <div class="box" @click="handleOption(4)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>MÁS DE 5000</span>
          </div>
        </div>
        <div class="contact__container">
          <h3>¿Quieres desarrollar un proyecto personalizado?</h3>
          <Asesor />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Asesor from "../components/Asesor.vue";
export default {
  name: "Cotizador-3",
  components: {
    Asesor: Asesor,
  },
  data() {
    return {
      dataView: {
        name: 'personas',
        personas: '50-500'
      },
      option: true,
    };
  },
  methods: {
   handleOption(option) {
      switch (option) {
        case 1:
          this.dataView.cantidad = '50-500'
        break;
        case 2:
          this.dataView.cantidad = '501-2000'
        break;
        case 3:
          this.dataView.cantidad = '2001-5000'
        break;
        case 4:
          this.dataView.cantidad = '5000-+'
        break;      
        default:
          break;
      }
      this.$store.dispatch("cotizacionAction", this.dataView);
      this.$router.push("./cotizador-4");
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f2f2f2;
}
.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}
.general__section {
  background-color: #f2f2f2;
  width: 100%;
}
/* pagina 2 */
.container__cotizador-2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0.5em;
}
.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
  margin: 0.2em 0.5em;
  padding: 0.5em 0.7em;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 240px;
  height: 300px;
  transition: all 0.3s;
  padding: 2em 1em;
  border-radius: 2px 80px 2px;
}
.box:hover {
  transform: scale(0.8);
}
.box-img {
  width: 100px;
  height: 100px;
  margin-top: 2em;
}
.box span {
  font-weight: 600;
  font-size: 1.2em;
  text-align: center;
}
.contact__container {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact__container h3 {
  font-size: 1em;
  margin: 1.7em;
}
/* responsive */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 2fr);
    align-self: center;
  }
  .box {
    width: 200px;
    height: 260px;
    margin: 0 auto;
  }
  .box span {
    font-size: 0.9em;
  }
}
@media (max-width: 739px) {
  .container__cotizador-2 {
    height: 100%;
  }
}
@media (max-width: 520px) {
  .cards {
    grid-template-columns: repeat(1, 4fr);
  }
  .box {
    width: 160px;
    height: 200px;
  }
  .box span {
    font-size: 0.7em;
  }
}
</style>