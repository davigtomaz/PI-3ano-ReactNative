import axios from 'axios'

const api = axios.create({
  baseURL: 'http://191.52.62.53:19003'
})

export default api 