import { RiDeleteBinLine } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import ChanelInfo from '../app/Components/ui/Chanel-info/ChanelInfo'
import Settings from '../app/Components/ui/SettingsPopup/Settings'
import UploadVideo from '../app/Components/ui/UploadVideoPopup/UploadVideo'
import CardLoader from '../app/Components/ui/Video-Card/CardLoader/CardLoader'
import VideoCard from '../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../app/Components/ui/Video-Card/VideoCardWrapper'
import { api } from '../app/store/api/api'
import { videoApi } from '../app/store/api/video.api'
import styles from '../styles/studio.module.scss'

const Studio = () => {
  const { data: Channel, isLoading: ChannelLoading } = api.useGetProfileQuery(null)
  const [deleteVideo] = videoApi.useDeleteVideoMutation()
  if (!Channel) return null
  return <div>
    
    <ChanelInfo ChannelId={Channel.id} Logo={Channel.avatarPath} Name={Channel.name}
                subscribersCount={Channel.subscribersCount}
                description={Channel.description} />
    <div className={styles.buttonWrapper}>
      <Settings />
      <UploadVideo />
    </div>
    <hr className={styles.lines} />
    
    <VideoCardWrapper>
      {ChannelLoading && <CardLoader count={10} />}
      {Channel.videos.map((video) => <div className={styles.Wrapper} key={video.id}>
        <div className={styles.iconWrapper}>
        <RiDeleteBinLine className={styles.delete} onClick={() => deleteVideo(video.id)}/>
        </div>
        <VideoCard createdAt={video.createdAt} linkPatch={video.id} ImageUrl={video.thumbnailPath}
                   VideoText={video.name}
                   ChannelPhoto={Channel.avatarPath} ChannelName={Channel.name}
                   views={video.views} ChannelVerified={Channel.isVerified} />
      </div>)}
    </VideoCardWrapper>
  
  
  </div>
}

export default Studio