import { iUser } from '../../shared/types/User.types'
import { AxiosClasic } from '../interseptors'

export const authServices = {
  async login(email: string, password: string) {
    const responce = await AxiosClasic.post<iUser>('/auth/login', {
      email, password,
    })
    return responce.data
  },
  
  async register(email: string, password: string) {
    const responce = await AxiosClasic.post<iUser>('/auth/register', {
      email, password,
    })
    return responce.data
  },
}