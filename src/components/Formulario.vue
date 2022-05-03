<template>
  <section id="banner-principal">
    <div id="primario">
      <div id="registro">
        <div class="formulario">
          <form id="form">
            <h1>" EXPERTOS EN REGALOS CORPORATIVOS "</h1>
            <h2>COTIZA TU PROYECTO CON NOSOTROS:</h2>
            <hr />
            <label for="nombre" class="form-label">
              <i class="fas fa-user"></i> Nombre:</label
            >
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingresa tu nombre*"
              v-model.trim="formData.name"
              required
            />
            <label for="correo" class="form-label">
              <i class="fas fa-envelope"></i> Correo:</label
            >
            <input
              v-model.trim="formData.email"
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo Corporativo*"
              required
            />

            <label for="nombre" class="form-label">
              <i class="fab fa-whatsapp"></i> Teléfono:</label
            >
            <input
              v-model.trim="formData.telefono"
              type="text"
              name="nombre"
              id="telefono"
              placeholder="Ingresa tu teléfono de contacto"
            />
            <label for="categoria">¿Qué te interesa?</label>
            <select
              class="select"
              name="categoria"
              id="categoria"
              v-model="selected"
            >
              <option value="Regalos dia de las madres">
                Regalos corporativos día de las madres
              </option>
              <option value="Regalos dia del padre">
                Regalos corporativos día del padre
              </option>
              <option value="Reconocimientos">
                Reconocimientos corporativos
              </option>
              <option value="Quinquenios">Quinquenios</option>
              <option value="Regalos de a clientes">Regalos a clientes</option>
              <option value="Convenciones de viaje">
                Convenciones de viaje
              </option>
              <option value="Giveaways">Giveaways</option>
              <option value="OTROS">Otros</option>
            </select>
            <button @click="greet" id="enviar" class="btn btn-dark">
              Enviar
            </button>
            <div class="message__container" v-show="showMensaje">
              <p id="mensaje-validacion">
                <i class="fas fa-exclamation-triangle"></i> {{ mensaje }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: new Object(),
      mensaje: new String(),
      showMensaje: false,
      selected: "Regalos dia de las madres",
    };
  },
  methods: {
    register() {
      console.log("max register")
      var data = {
        date: Date.now(),
        nombre: this.formData.name,
        email: this.formData.email,
        telefono: this.formData.telefono,
        categoria: this.selected,
      };
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
      let expnumber =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

      if(data.nombre ==""){
      this.showMensaje = true;
      this.mensaje = "Ingresa un nombre";
      }
      if (expdominio.test(this.formData.email)) {
        this.showMensaje = true;
        this.mensaje = "Ingresa un correo corporativo";
      } else {
        if (!exp.test(this.formData.email)) {
          this.showMensaje = true;
          this.mensaje = "Ingresa un correo valido";
        } else {
          this.showMensaje = true;
          if (!expnumber.test(this.formData.telefono)) {
            console.log("Ingresa un telefono valido");
            this.mensaje = " Ingresa un telefono valido ";
            this.showMensaje = true;
          } else {
            this.axios
              .post("/rodselect/prospecto", data)
              .then((res) => {
                console.log(res);
                console.log("Respuestaaaaa")
                this.mensaje =
                  " Muchas felicidades " +
                  data.email +
                  ", te haz registrado correctamente, espera a que te contactemos.";
                this.showMensaje = true;
                this.resetForm();
              })
              .catch((err) => {
                console.log(err);
                this.mensaje =
                  "Ingrese un nombre valido";
              });
          }
        }
      }
    },
    registro(){
      console.log("registro",this.formData);
       this.axios
              .post("/rodselect/prospecto",this.formData)
              .then((res) => {
                console.log(res);
                console.log("Respuestaaaaa")
                this.mensaje =
                  " Muchas felicidades " +
                  data.email +
                  ", te haz registrado correctamente, espera a que te contactemos.";
                this.showMensaje = true;
                this.resetForm();
              })
              .catch((err) => {
                console.log(this.formData);
                this.mensaje =
                  "Este correo ya fue registrado, espera a que te contactemos.";
              });
    }
    ,
    greet(event) {
      event.preventDefault();
      this.register();
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.telefono = "";
    },
  },
};
</script>

<style scoped>
h1{
  text-align: center;
  letter-spacing: 2px;
  font-size: 20px;
}
h2{
  margin: 0.5em;
  text-align: center;
  font-size: 17px;
  color:rgb(255, 217, 134);
}
h1:hover,h2:hover{
  filter: brightness(1.1);
  transform: scale(1.1155);
  transition: 500ms;
}
#banner-principal {
  font-weight: 700;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  letter-spacing: 1px;
  filter: brightness(1.071);
  filter: sepia(1.65);
  filter: opacity(82%);
  opacity: 0.9;
  background-size:cover;
  background-attachment: fixed;
  animation: transiciones 5222222ms ease-in-out infinite forwards;
  
}

@keyframes transiciones {
  0% {
    background: url(../assets/img/carousel_principal/ACTECK.webp);
    background-size: 100%;
    transition: 42s;
  background-position: center;
  background-repeat: no-repeat;
    
  }
  15% {
    background: url(../assets/img/carousel_principal/CALVIN_KLEIN.webp);
    background-size: 100%;
    transition: 42s;
  background-position: center;
  background-repeat: no-repeat;
  }
  30% {
    background: url(../assets/img/carousel_principal/CITIZEN.webp);
    background-size: 100%;
     background-position: center;
  background-repeat: no-repeat;
  transition: 42s;
  }
  45% {
    background: url(../assets/img/carousel_principal/ORTIZ_ESPINOZA.webp);
    background-size: 100%;
    transition: 42s;
  background-position: center;
  background-repeat: no-repeat;
  }

  60% {
    background: url(../assets/img/carousel_principal/SHEAFFER.webp);
    background-size: 100%;
    transition: 42s;
  background-position: center;
  background-repeat: no-repeat;
  }
   75% {
    background: url(../assets/img/carousel_principal/SWISSBRAND.webp);
    background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 42s;
  }
   85% {
    background: url(../assets/img/carousel_principal/UNO_DE_50.webp);
    background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 42s;
  }
   100% {
    background: url(../assets/img/carousel_principal/VICTORINOX.webp);
    background-size: 100%;
    background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  transition: 42s;
  }
}

#primario {
  width: 50%;
  height: 100%;
  padding-bottom: 100px;
  background: rgba(0, 0, 0, 0.804);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.505) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(204, 29, 29, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
#primario:hover{
  background: rgba(56, 26, 26, 0.879);
  transition: all 600ms;
}
#registro {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column;
  padding-top: 10px;
}

.formulario {
  width: 80%;
}
#form {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-top: 70px;
}
form label,
form h1 {
  color: white;
}
.message__container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 10px;
  background: linear-gradient(to bottom, #f2f2f21f, #11111198);
}
#mensaje-validacion,
hr {
  color: white;
}
input::placeholder {
  color: rgb(255, 255, 255);
}

form input,
form select {
  width: 100%;
  height: 40px;
  padding: 0.5em;
  letter-spacing: 1px;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.726);
  background: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  font-size: 14px;
}
form select option {
  padding: 1.5em;
}
label,
input,
button,
select {
  margin: 10px;
}
form label i{
  color: white;
  margin: 0.4em;
}
form button {
  width: 100px;
  margin: 0 auto;
}


.form__container {
  position: relative;
  width: 50vw;
  padding: 0 0.5em;
}
.message__container i {
  color: yellow;
}
form {
  top: 50%;
  left: 50%;
}
@media (max-width: 739px) {
  #banner_principal{
    height: auto;
  }
  #primario {
    width: 100%;
    height: auto;
  }
}
</style>