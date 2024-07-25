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
        if(!produto?.id || produto?.id < 1){
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