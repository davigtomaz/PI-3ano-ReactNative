import api from '../plugins/api'

class CategoriaService {
  async getAllCategorias() {
    const response = await api.get('/Categorias/')
    return response.data
  }
  async saveCategoria(Categoria) {
    const response = await api.post('/Categorias/', Categoria)
    return response.data
  }
  async deleteCategoria(Categoria) {
    const response = await api.delete(`/Categorias/${Categoria.id}/`)
    return response.data
  }
}

export default new CategoriaService()