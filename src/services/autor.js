import api from '../plugins/api'

class AutorService {
  async getAllAutores() {
    const response = await api.get('/autor/')
    return response.data
  }
  async saveAutor(autor) {
    const response = await api.post('/autores/', autor)
    return response.data
  }
  async deleteAutor(autor) {
    const response = await api.delete(`/autor/${autor.id}/`)
    return response.data
  }
}

export default new AutorService()