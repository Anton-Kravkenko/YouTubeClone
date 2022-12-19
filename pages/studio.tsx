import styles from '../app/Components/LeftBar/LeftBar.module.scss'
import ChanelInfo from '../app/Components/ui/Chanel-info/ChanelInfo'
import VideoCard from '../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../app/Components/ui/Video-Card/VideoCardWrapper'
import { api } from '../app/store/api/api'

const Studio = () => {
  const { data: Channel, isLoading: ChannelLoading } = api.useGetProfileQuery(null)
  if (!Channel) return null
  return <div>
    
    <ChanelInfo ChannelId={Channel.id} Logo={Channel.avatarPath} Name={Channel.name}
                subscribersCount={Channel.subscribersCount}
                description={Channel.description} />
    <hr className={styles.lines} />
    
    <VideoCardWrapper>
      {Channel.videos.map((video) => <div key={video.id}>
        <VideoCard linkPatch={video.id} ImageUrl={video.thumbnailPath} VideoText={video.name}
                   ChannelPhoto={Channel.avatarPath} ChannelName={Channel.name}
                   views={video.views} ChannelVerified={Channel.isVerified} />
      </div>)}
    </VideoCardWrapper>
  
  
  </div>
}

export default Studio