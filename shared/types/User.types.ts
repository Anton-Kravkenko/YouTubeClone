import { iVideo } from './Video.types'

export interface iUser {
  id: number,
  videos: iVideo[],
  name: string,
  description: string
  location: string
  subscriptions: ISubscription[],
  subscribersCount: number
  isVerified: boolean
  email: string
  avatarPath: string
  updatedAt: string
  createdAt: string
  user: any,
  accessToken: string
}

export interface ISubscription extends iUser {
  toChannel: iUser
}

export interface IauthData {
  email: string
  password: string
}


