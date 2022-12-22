import { iUser } from './User.types'

export interface iVideo {
  id: number,
  name: string,
  isPublic: boolean,
  views: number | string
  likes: number
  description: string
  videoPath: string
  thumbnailPath: string
  updatedAt: string
  user: IVideoUser
  createdAt: string
  comments: IComment[]
}

export interface IVideoUser {
  id: number
  isVerified: boolean
  avatarPath: string
  subscribersCount: number
  name: string
}

export interface IVideoDto
  extends Pick<
    iVideo,
    'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
  > {
}

export interface IBase {
  id: number
  createdAt: string
  updatedAt: string
}


export interface IComment extends IBase {
  user: iUser
  video: iVideo
  message: string
}

export interface ICommentDto extends Pick<IComment, 'message'> {
  videoId: number
}

