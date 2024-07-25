import API from '../config/API'

class ProdutoServico {
    static async todos() {
        const response = await API.get('/produtos');
        return response.data
    }

    static async buscarPorId(id) {
        const response = await API.get(`/produto/${id}`);
        return response.data;
    }

    static async salvar(produto) {
        if(!produto) throw "Preencha o produto";
        if(!produto.nome) throw "Preencha o nome do produto";
        if(!produto.preco) throw "Preencha o preço do produto";
        if(!produto.quantidade_estoque) throw "Preencha a quantidade de estoque";

        if(!produto.id || produto.id < 1){
            await API.post(`/produto`, produto);
        }
        else{
            await API.put(`/produto/${produto.id}`, produto);
        }
    }

    static async excluirPorId(produtoId) {
        await API.delete(`/produto/${produtoId}`);
    }
}

export default ProdutoServico;