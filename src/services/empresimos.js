import api from '../plugins/api'

class EmprestimoService {
  async getAllEmprestimos() {
    const response = await api.get('/emprestimos/')
    return response.data
  }
  async saveLivro(Livro, image) {
    Livro.categoria = [Livro.categoria]
    Livro.autores = [Livro.autores]
    Livro.capa_attachment_key = image.attachment_key
    console.log(Livro)
    const response = await api.post('/livros/', Livro)
    return response.data
  }
  async deleteLivro(Livro) {
    try {
      console.log("ID do Livro a ser deletado:", Livro.id);
      const response = await api.delete(`/livros/${Livro.id}/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      throw error;
    }
  }
}

export default new LivroService()