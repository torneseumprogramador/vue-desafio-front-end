<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container px-4">
        <router-link class="navbar-brand" to="/">Vue Desafio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <!--div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/produtos">Produtos</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/sobre">Sobre</router-link></li>
          </ul>
        </div-->
      </div>
    </nav>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center">
              <div class="col-lg-8">
                  <h2>Login</h2>
              </div>
          </div>
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'LoginPage',
    components: {
      FooterComponent
    }
  }
  </script>
  