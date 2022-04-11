<template>
<div>
  <a class="link" type="button" @click="mensajeW()">
    Contacta un Asesor
  </a>
</div>
  
</template>

<script>
export default {
    name: 'Asesor',
    data(){
        return{
            name: 'Chinese',
            mensaje: true
        }
        
      },
    computed: {
        mensajeC: function(){
          console.log("MensajeComputed")
          window.open("https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos");
        }
    },
    methods:{
        mensajeW(){
            console.log("MensajeW")
            this.mensajeC
        }
    }

}
</script>

<style scoped>
  div{
    margin: 4em;
  }
  div .link{
    font-size: 1em;
    font-weight: 700;
    background: linear-gradient(to right, rgb(202, 202, 202), rgb(153, 153, 153));
    padding: 1em;
    border: none;
    border-radius: 15px;
    text-transform: uppercase;
    color: black;
    outline: none;
    text-decoration: none;
  }
  div .link:hover{
    background: linear-gradient(to right, rgb(63, 63, 63), rgb(22, 22, 22));
    color: rgb(255, 255, 255);
    transition: all 500ms;
  }
</style>