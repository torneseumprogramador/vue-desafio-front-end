<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container px-4">
      <router-link class="navbar-brand" to="/">Vue Desafio</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/produtos">Produtos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/sobre">Sobre</router-link></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="sair">Sair</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginServico from '../servicos/LoginServico'

export default {
  name: 'NavComponent',
  methods: {
    sair() {
      LoginServico.clearLocalStorage();
      this.$router.push('/login');
    }
  }
  
}

</script>