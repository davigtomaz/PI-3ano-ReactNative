import api from '../plugins/api'

class LivroService {
  async getAllLivros() {
    const response = await api.get('/Livros/')
    return response.data
  }
  async saveLivro(Livro) {
    const response = await api.post('/Livros/', Livro)
    return response.data
  }
  async deleteLivro(Livro) {
    const response = await api.delete(`/Livros/${Livro.id}/`)
    return response.data
  }
}

export default new LivroService()