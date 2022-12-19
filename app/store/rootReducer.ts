import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'
import { api } from './api/api'
import { authSlices } from './auth/auth.slices'

export const RootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlices.reducer,
  toastr: toastrReducer,
})