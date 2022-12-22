import { iVideo } from '../../../shared/types/Video.types'
import { api, VIDEO } from './api'


export const videoApi = api.injectEndpoints({
  endpoints: builder => ({
    getVideosBySearchTerm: builder.query<iVideo[], string>({
      query: searchTerm => ({ url: `/${VIDEO}`, params: { searchTerm } }),
    }),
    getVideoByUserId: builder.query<iVideo[], any>({
      query: id => `/${VIDEO}/by-user/${id}`,
    }),
    getVideoById: builder.query<iVideo, number>({
      query: id => `/${VIDEO}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    getAllVideo: builder.query<iVideo[], void>({
      query: () => `/${VIDEO}`,
    }),
    getTrendingVideo: builder.query<iVideo[], void>({
      query: () => `/${VIDEO}/most-popular`,
    }),
    getVideoPrivate: builder.query<iVideo, number>({
      query: id => `/${VIDEO}/get-private/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    createVideo: builder.mutation<number, void>({
      query: () => ({
        url: `/${VIDEO}`,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    updateVideo: builder.mutation<iVideo, any>({
      query: ({ id, ...body }) => ({
        url: `/${VIDEO}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Video', id },
        { type: 'Profile' },
      ],
    }),
    updateViews: builder.mutation<iVideo, number>({
      query: id => ({
        url: `/${VIDEO}/update-views/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    
    deleteVideo: builder.mutation<void, number>({
      query: id => ({
        url: `/${VIDEO}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Video' }, { type: 'Profile' }],
    }),
  }),
})
