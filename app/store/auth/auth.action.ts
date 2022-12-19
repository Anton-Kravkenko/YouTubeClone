import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { IauthData, iUser } from '../../../shared/types/User.types'
import { authServices } from '../../../utils/services/auth.services'


export const register = createAsyncThunk<iUser, IauthData>('auth/register', async ({
                                                                                     email,
                                                                                     password,
                                                                                   }, thunkAPI) => {
  try {
    const responce = await authServices.register(email, password)
    toastr.success('Register', 'access!')
    return responce
  } catch (e) {
    toastr.error('Register', 'Error')
    return thunkAPI.rejectWithValue(e)
  }
})
export const login = createAsyncThunk<iUser, IauthData>('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const responce = await authServices.login(email, password)
    toastr.success('Login', 'access!')
    return responce
  } catch (e) {
    toastr.error('Login', 'Error')
    return thunkAPI.rejectWithValue(e)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  return {}
})