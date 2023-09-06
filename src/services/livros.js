import api from '../plugins/api'

class LivroService {
  async getAllLivros() {
    const response = await api.get('/livros/')
    return response.data
  }
  async saveLivro(Livro) {
    const response = await api.post('/livros/', Livro)
    return response.data
  }
  async deleteLivro(Livro) {
    const response = await api.delete(`/livros/${Livro.id}/`)
    return response.data
  }
}

export default new LivroService()