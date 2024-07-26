<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container px-4">
        <router-link class="navbar-brand" to="/">Vue Desafio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      </div>
    </nav>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center" style="text-align: left;">
              <div class="col-lg-8">
                <h2>Login</h2>
                <br>
                <form @submit.prevent="logar">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" v-model="login.email" required>
                  </div>
                  <div class="mb-3">
                    <label for="senha" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="senha" v-model="login.senha" required>
                  </div>
                  <div v-if="mensagemDeErro" class="alert alert-danger" role="alert">
                    {{ mensagemDeErro }}
                  </div>
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
              </div>
          </div>
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  import FooterComponent from '../components/FooterComponent'
  import LoginServico from '../servicos/LoginServico'
  
  export default {
    name: 'LoginPage',
    components: {
      FooterComponent
    },
    data() {
      return {
        mensagemDeErro: "",
        login: {
          email: "",
          senha: ""
        }
      }
    },
    methods: {
      async logar() {
        try {
          let res = await LoginServico.login(this.login);
          LoginServico.setLocalStorage(res.token);
          this.$router.push('/');
        } catch (error) {
          this.mensagemDeErro = error?.response?.data || error?.message || error;
        }
      }
    }
  }
  </script>
  