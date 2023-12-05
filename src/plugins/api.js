import axios from 'axios'

const api = axios.create({
  baseURL: 'https://daarii.4.us-1.fl0.io/'
})

export default api 