<template>
  <div class="general__section">
    <!-- pagina 1 -->
    <section id="#cotizador">
      <div class="cotizador__portada">
        <div class="card__information">
          <small>Inicia a crear tu</small>
          <h2>regalo corporativo ideal</h2>
          <p>
            Consiente a tus clientes, trabajadores y socios comerciales con un regalo altamente personalizado de acuerdo a tus necesidades y presupuesto.
          </p>
          <form class="emailForm">
            <label for="email">E-mail corporativo:</label>
            <input
              type="email"
              v-model="email"
              placeholder="INGRESA UN EMAIL!"
            />
            <div class="buttons">
              <span v-show="showMensaje">{{ mensaje }}</span>
              <button
                type="button"
                class="next-button"
                @click.prevent="validar()"
              >
                Iniciar
              </button>
            </div>
          </form>
        </div>
        <div class="bacground-image__container">
          <img
            class="background-image"
            src="../assets/img/cotizador/reloj.png"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Cotizador",

  data() {
    return {
      email: '',
      mensaje: "Ingresa un Email !",
      showMensaje: false,
      isValid: true,
    };
  },
  created() {
    if(localStorage.getItem('LoggedEmail')){
      localStorage.removeItem('LoggedEmail');
      //alert("con email")
    }else{
      //alert("sin email")
    }
    this.$store.dispatch("changeModeAction", false);
    
  },
  methods: {
    validar() {
      this.register();
    },
    next() {
      this.$router.push("/cotizador-2");
    },

    register() {
      let emailData = this.email;
      this.showMensaje = false;
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;

      if (expdominio.test(emailData)) {
        this.mensaje = "Ingresa un correo corporativo";
        this.showMensaje = true;
      } else {
        if (!exp.test(emailData)) {
          this.mensaje = "Ingresa un correo valido";
          this.showMensaje = true;
        } else {
          this.mensaje = "Correo valido";
          this.addEmail();
          this.next();
        }
      }
    },
    addEmail() {
        this.$store.dispatch("addEmailAction", this.email);
        localStorage.setItem('LoggedEmail',this.email);
    },
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
.general__section {
  background-color: #f2f2f2;
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
}
h3 {
  font-size: 19px;
  font-weight: 400;
}
/* pagina 1 */
#cotizador {
  width: 100vw;
  background-color: #f2f2f2;
}
.cotizador__portada {
  height: 50vh;
  display: grid;
  margin-top: 20px;
  position: relative;
  margin-bottom: 300px;
}
.background-image__container {
  width: 100%;
  height: 80vh;
}
.background-image {
  width: 90%;
  background-color: transparent;
}
.card__information {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2.5em;
  padding: 2em;
  height: 90vh;
  z-index: 10;
  position: absolute;
}
.emailForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.emailForm input {
  height: 38px;
  border: none;
  margin: 0.5em;
  text-align: center;
  border:2px solid rgba(0, 0, 0, 0.5);
  font-size: 1.15em;
  padding: .35em .7em .3125em;
  color:rgba(0, 0, 0, 0.836);
  border-radius:.25em;
  background:transparent;
  transition:all .100s;
}  
.card__information small {
  font-size: 2em;
  font-weight: 500;
}
.card__information h2 {
  font-size: 3em;
  font-weight: 800;
}
.card__information p {
  letter-spacing: 0.05em;
  font-size: 1.2em;
  font-weight: 300;
}
.buttons {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons .next-button {
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 0.6em;
  margin: 0.9em;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}
.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}

@media (max-width: 845px) {
  .card__information {
    width: 90%;
    padding: 2.2em;
    margin: 2.3em;
    font-size: 0.9em;
  }
  .cotizador__portada {
    margin-bottom: 900px;
  }
  .background-image {
    opacity: 0.5;
  }
}
@media (max-width: 739px) {
  .cotizador__portada {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 300px;
  }
  .card__information {
    width: 90%;
    padding: 2.2em;
    margin: 2.3em;
    font-size: 0.8em;
  }
  .background-image {
    max-width: 48vw;
    max-height: 28vh;
    transform: scale(2.4);
  }
}
</style>