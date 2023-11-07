import api from '../plugins/api'

class EmprestimoService {
  async getAllEmprestimos() {
    const response = await api.get('/emprestimos/')
    return response.data
  }
  async saveEmprestimo(emprestimo) {
    const response = await api.post('/emprestimos/', emprestimo)
    return response.data
  }
  async deleteEmprestimo(emprestimo) {
    const response = await api.delete(`/emprestimos/${emprestimo.id}/`)
    return response.data
  }
}

export default new EmprestimoService()