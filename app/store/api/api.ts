import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { iUser } from '../../../shared/types/User.types'
import { IMediaResponse } from '../../../utils/mediaInterface'
import { Api_URL } from '../../../utils/Server.config'
import { RootState } from '../store'

export const VIDEO = 'video'
export const USER = 'user'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Video', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: Api_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken
      
      if (token) headers.set('Authorization', `Bearer ${token}`)
      
      return headers
    },
  }),
  endpoints: builder => ({
    getProfile: builder.query<iUser, any>({
      query: () => `${USER}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    uploadMedia: builder.mutation<IMediaResponse, any>({
      query: (media) => ({
        url: `media`,
        method: 'POST',
        body: media,
        
      }),
    }),
    
    
    uploadUserdata: builder.mutation<iUser, any>({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    subscribeToChannel: builder.mutation<boolean, number>({
      query: channelId => ({
        url: `${USER}/subscribe/${channelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
