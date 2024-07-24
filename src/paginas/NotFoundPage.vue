<template>
    <NavComponent></NavComponent>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center">
              <div class="col-lg-8">
                  <h2>Página não encontrada</h2>
              </div>
          </div>
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  import NavComponent from '../components/NavComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'NotFoundPage',
    components: {
      NavComponent,
      FooterComponent
    }
  }
  </script>
  