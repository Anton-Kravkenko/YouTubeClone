export interface VideoCardInterface {
  ImageUrl: string,
  VideoText: string,
  ChannelPhoto: string,
  ChannelName: string,
  linkPatch?: string | number,
  views: number | string,
  ChannelVerified: boolean
  createdAt: string
}