import axios from 'axios'
const serverUrl = 'https://my-json-server.typicode.com/etni/real-world-vue3'

const apiClient = axios.create({
  baseURL: serverUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
