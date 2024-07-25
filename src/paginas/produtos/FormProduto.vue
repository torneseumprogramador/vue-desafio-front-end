<template>
  <form @submit.prevent="salvarProduto">
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input type="text" class="form-control" id="nome" v-model="produtoLocal.nome" required>
    </div>
    <div class="mb-3">
      <label for="preco" class="form-label">Preço</label>
      <input type="number" step="0.01" class="form-control" id="preco" v-model="produtoLocal.preco" required>
    </div>
    <div class="mb-3">
      <label for="descricao" class="form-label">Descrição</label>
      <textarea class="form-control" id="descricao" v-model="produtoLocal.descricao"></textarea>
    </div>
    <div class="mb-3">
      <label for="quantidade_estoque" class="form-label">Quantidade em Estoque</label>
      <input type="number" class="form-control" id="quantidade_estoque" v-model="produtoLocal.quantidade_estoque" required>
    </div>
    <div v-if="mensagemDeErro" class="alert alert-danger" role="alert">
      {{ mensagemDeErro }}
    </div>
    <button type="submit" class="btn btn-primary">Salvar</button>
  </form>
</template>
  
<script>
export default {
  name: 'FormProduto',
  props: {
    produto: {
      type: Object,
      default: () => ({
        nome: '',
        preco: null,
        descricao: '',
        quantidade_estoque: null
      })
    },
    salvar: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      mensagemDeErro: "",
      produtoLocal: { ...this.produto }
    }
  },
  methods: {
    async salvarProduto() {
      try {
        await this.salvar(this.produtoLocal);
      } catch (error) {
        this.mensagemDeErro = error.message || error;
      }
    }
  }
}
</script>
  