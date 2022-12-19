import { Server_URL } from './Server.config'

export const GetMedia = (url: string) => {
  return `${Server_URL}${url}`
}