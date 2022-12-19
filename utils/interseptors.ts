import axios from 'axios'
import { Api_URL } from './Server.config'

export const AxiosClasic = axios.create({
  baseURL: Api_URL,
  headers: { 'Content-Type': 'application/json' },
})