import api from '../plugins/api'

class EditoraService {
  async getAllEditoras() {
    const response = await api.get('/Editoras/')
    return response.data
  }
  async saveEditora(Editora) {
    const response = await api.post('/Editoras/', Editora)
    return response.data
  }
  async deleteEditora(Editora) {
    const response = await api.delete(`/Editoras/${Editora.id}/`)
    return response.data
  }
}

export default new EditoraService()