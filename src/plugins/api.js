import axios from 'axios'

const api = axios.create({
  baseURL: 'https://daarii-ni11-dev.fl0.io/'
})

export default api 