import api from '../plugins/api'

class AutorService {
  async getAllAutores() {
    const response = await api.get('/Autores/')
    return response.data
  }
  async saveAutor(Autor) {
    const response = await api.post('/Autores/', Autor)
    return response.data
  }
  async deleteAutor(Autor) {
    const response = await api.delete(`/Autores/${Autor.id}/`)
    return response.data
  }
}

export default new AutorService()