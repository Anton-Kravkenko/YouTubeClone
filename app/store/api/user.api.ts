import { iUser } from '../../../shared/types/User.types'
import { api, USER } from './api'


export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<iUser, any>({
      query: id => `/${USER}/by-id/${id}`,
    }),
  }),
})
