<template>
    <NavComponent></NavComponent>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center">
              <div class="col-lg-8" style="text-align: left;">
                <h2>Alterar produto</h2>
                <hr>
                <FormProduto v-if="produto" :produto="produto" :salvar="salvar" />
              </div>
          </div>
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  import NavComponent from '../../components/NavComponent'
  import FooterComponent from '../../components/FooterComponent'
  import ProdutoServico from '../../servicos/ProdutoServico'
  import FormProduto from './FormProduto'

  export default {
    name: 'AlterarProdutoPage',
    components: {
      NavComponent,
      FooterComponent,
      FormProduto
    },
    data() {
      return {
        produto: null
      }
    },
    methods: {
      async salvar(produto){
        await ProdutoServico.salvar(produto);
        this.$router.push('/produtos');
      }
    },
    async created() {
      let id = this.$route.params.id;
      this.produto = await ProdutoServico.buscarPorId(id);
    }
  }
  </script>
  