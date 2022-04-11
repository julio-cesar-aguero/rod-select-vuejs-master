<template>
  <div class="general__section">
    <!-- pagina 6 -->
    <section id="cotizador-6">
      <div class="column__left">
        <div class="contact__container">
          <h2>¿Qué tipos de regalos quieres dar?</h2>
          <p>
            Encuentra una gran variedad de regalos para otorgar una experiencia
            inolvidable y reforzar tu imagen corporativa.
          </p>
        </div>
        <div class="contact__container">
          <h2>Quiero desarrollar mi propio regalo</h2>
          <Asesor />
        </div>
      </div>
      <div class="column__right">
        <div class="box-boxs">
          <div @click="selectArticle('joyeria')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-joyeria.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.joyeria }}</span>
          </div>
          <div @click="selectArticle('piel')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-piel.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.piel }}</span>
          </div>
          <div @click="selectArticle('reloj')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-reloj.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.reloj }}</span>
          </div>
          <div @click="selectArticle('plumas')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-plumas.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.boligrafos }}</span>
          </div>
          <div @click="selectArticle('pines')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-pines.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.pines }}</span>
          </div>
          <div @click="selectArticle('mochilas')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-mochilas.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.mochilas }}</span>
          </div>
          <div @click="selectArticle('gamer')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-gamer.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.gamer }}</span>
          </div>
          <div @click="selectArticle('cotizador')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-reconocimientos.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.reconocimientos }}</span>
          </div>
          <div @click="selectArticle('otros')" class="box-child">
            <div class="image-box">
              <img
                src="../assets/img/cotizador/recursos/cotizador-otros.webp"
                alt="box-image"
              />
            </div>
            <span>{{ boxs.otros }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Asesor from "../components/Asesor.vue";
export default {
  name: "Cotizador-6",
  components: {
    Asesor: Asesor,
  },
  data() {
    return {
      option: "",
      dataView: {
        name: "regalo",
        cantidad: "",
      },
      boxs: {
        joyeria: 'JOYERIA',
        piel: 'ARTICULOS DE PIEL',
        reloj: 'RELOJES',
        boligrafos: 'BOLIGRAFOS',
        pines: 'PINES',
        mochilas: "MOCHILAS-PORTAFOLIOS",
        gamer: "GAMER",
        reconocimientos: "RECONOCIMIENTOS",
        otros: "OTROS",
      },
    };
  },
  methods: {
    selectArticle(article) {
      this.dataView.cantidad = this.boxs[article];
      this.$store.dispatch("cotizacionAction", this.dataView);
      this.option = this.$router.push("/Cotizador-7");
    },
  },
};
</script>

<style scoped>
/* button */

.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}
.general__section {
  width: 100%;
  background-color: #f2f2f2;
}
.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
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
  padding: 2em;
  border-radius: 2px 80px 2px;
}
.box:hover {
  transform: scale(1.8);
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
.date__container {
  margin: 100px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date__container button {
  margin: 1.5em;
}
#cotizador-6 {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 4em 2em;
}
.column__left,
.column__right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.column__left {
  flex-direction: column;
}
.column__left .contact__container {
  margin: 1em 2em;
  padding: 0.6em 1.4em;
}
.box-boxs {
  width: 500px;
  height: 500px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 3fr);
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  overflow: hidden;
}
.box-child {
  text-align: center;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.box-child:hover{
  filter: brightness(1.1);
  transform: scale(1.1155);
  transition: 500ms;
  
}
.image-box img {
  background-color: white;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.box-child span {
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 15px;
  height: 5px;
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
  #cotizador-6 {
    flex-direction: column;
  }
  .column__left,
  .column__right {
    width: 100%;
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