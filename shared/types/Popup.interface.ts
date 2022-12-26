import { AsyncThunk } from '@reduxjs/toolkit'
import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { iUser } from './User.types'
export interface PopupInterface {
  Channel?: any,
  isShow: boolean
  setIsShow:  Dispatch<SetStateAction<boolean>>
  ComponentsRef: any
  user?: {id: number, email: string} | null
  logout?: any
  HandleRegister?: any
  HandleLogin?: any
  SettingsSubmit?: any
  VideoSubmit?: any
  VideoStage?: boolean
  UpdateInfo?: any
  FileLoading?: boolean
}