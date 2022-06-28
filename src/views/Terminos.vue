<template>
  <div id="terminos">
    <div class="head">
        <h1>Términos y Condiciones</h1>
    </div>
    <div class="container">
        
        <pdf class="pdf" src="p.pdf"></pdf>
        
    </div>
    
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
     components: {
        pdf
    }

}
</script>

<style scoped>
#terminos{
    width: 100%;
    background-color: #f2f2f2;
}
#terminos .head{
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25em;
    background-color: rgba(0, 0, 255, 0.00001);
}
.container
{
    background-color: rgba(160, 160, 239, 0.1);
    width: 100%;
    padding: 0.2em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .pdf{
    width: 100%;

}
</style>