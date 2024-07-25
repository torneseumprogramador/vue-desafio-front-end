<template>
    <NavComponent></NavComponent>
    <!-- About section-->
    <section id="about">
      <div class="container px-4">
          <div class="row gx-4 justify-content-center">
              <div class="col-lg-8">
                  <h2>Lista de produtos</h2>
                  <hr>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Data de Criação</th>
                        <th>Data de Modificação</th>
                        <th>Quantidade em Estoque</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="produto in produtos" :key="produto.id">
                        <td>{{ produto.id }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.preco }}</td>
                        <td>{{ produto.descricao }}</td>
                        <td>{{ formatDate(produto.data_criacao) }}</td>
                        <td>{{ formatDate(produto.data_modificacao) }}</td>
                        <td>{{ produto.quantidade_estoque }}</td>
                        <td>
                          <button @click="() => { excluir(produto.id) }" class="btn btn-danger">Excluir</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
  import DataHelper from '../../helpers/DateHelper'

  export default {
    name: 'ProdutosPage',
    components: {
      NavComponent,
      FooterComponent
    },
    data() {
      return {
        produtos: [],
      };
    },
    methods: {
      formatDate(dateString) {
        return DataHelper.formatBr(dateString);
      },
      async carregar() {
        try {
          this.produtos = await ProdutoServico.todos();
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      },
      async excluir(produtoId){
        if(confirm("Confirma ?")){
          await ProdutoServico.excluirPorId(produtoId);
          this.carregar();
        }
      }
    },
    created() {
      this.carregar()
    }
  }
  </script>
  