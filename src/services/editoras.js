import api from '../plugins/api'

class EditoraService {
  async getAllEditoras() {
    const response = await api.get('/editoras/')
    return response.data
  }
  async saveEditora(editora) {
    const response = await api.post('/editoras/', editora)
    return response.data
  }
  async deleteEditora(editora) {
    const response = await api.delete(`/editoras/${editora.id}/`)
    return response.data
  }
}

export default new EditoraService()