<template>
    <NavComponent></NavComponent>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center">
              <div class="col-lg-8">
                  <h2>Lista de produtos</h2>
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
    name: 'ProdutosPage',
    components: {
      NavComponent,
      FooterComponent
    }
  }
  </script>
  