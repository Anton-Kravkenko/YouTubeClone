import ChanelInfo from '../app/Components/ui/Chanel-info/ChanelInfo'
import SettingsPopup from '../app/Components/ui/SettingsPopup/SettingsPopup'
import UploadVideoPopup from '../app/Components/ui/UploadVideoPopup/UploadVideoPopup'
import CardLoader from '../app/Components/ui/Video-Card/CardLoader/CardLoader'
import VideoCard from '../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../app/Components/ui/Video-Card/VideoCardWrapper'
import { api } from '../app/store/api/api'
import styles from '../styles/studio.module.scss'

const Studio = () => {
  const { data: Channel, isLoading: ChannelLoading } = api.useGetProfileQuery(null)
  if (!Channel) return null
  return <div>
    
    <ChanelInfo ChannelId={Channel.id} Logo={Channel.avatarPath} Name={Channel.name}
                subscribersCount={Channel.subscribersCount}
                description={Channel.description} />
    <div className={styles.buttonWrapper}>
      <SettingsPopup />
      <UploadVideoPopup /></div>
    <hr className={styles.lines} />
    
    <VideoCardWrapper>
      {ChannelLoading && <CardLoader count={10} />}
      {Channel.videos.map((video) => <div key={video.id}>
        <VideoCard createdAt={video.createdAt} linkPatch={video.id} ImageUrl={video.thumbnailPath}
                   VideoText={video.name}
                   ChannelPhoto={Channel.avatarPath} ChannelName={Channel.name}
                   views={video.views} ChannelVerified={Channel.isVerified} />
      </div>)}
    </VideoCardWrapper>
  
  
  </div>
}

export default Studio