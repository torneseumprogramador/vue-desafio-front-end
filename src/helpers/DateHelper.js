class DataHelper {
  static formatBr(data){
    return new Date(data).toLocaleDateString('pt-BR')
  }
}

export default DataHelper;
