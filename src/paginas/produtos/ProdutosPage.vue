<template>
    <NavComponent></NavComponent>
    <!-- About section-->
    <section id="about">
      <div class="">
          <div class="row justify-content-center">
              <div class="col-lg-8">
                  <div class="row">
                    <h2 class="col-9">Lista de produtos</h2>
                    <div class="col-3" style="text-align: right;">
                      <router-link class="btn btn-primary" to="/produtos/novo">Novo produto</router-link>
                    </div>
                  </div>
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
                        <th style="width: 180px;"></th>
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
                          <div class="flex">
                            <router-link style="margin-right: 5px;" class="btn btn-warning" :to="`/produtos/${produto.id}`">Alterar</router-link>
                            <button @click="() => { excluir(produto.id) }" class="btn btn-danger">Excluir</button>
                          </div>
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
  