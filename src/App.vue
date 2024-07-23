<template>
  <NavComponent></NavComponent>
  <HeaderComponent></HeaderComponent>
  <!-- About section-->
  <section id="about">
    <div class="container px-4">
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
                <h2>Aula 51 - Iniciando com Vue.js</h2>
                <p class="lead">
                  Nesta aula aprendemos como funciona a estrutura do vue.js e como podemos iniciar
                </p>
            </div>
        </div>
    </div>
  </section>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
