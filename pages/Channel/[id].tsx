import { useRouter } from 'next/router'
import ChanelInfo from '../../app/Components/ui/Chanel-info/ChanelInfo'
import VideoCard from '../../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../../app/Components/ui/Video-Card/VideoCardWrapper'
import { useWatch } from '../../utils/hook/useWatch'
import styles from './channel.module.scss'

const Id = () => {
  const router = useRouter()
  const { user } = useWatch(router.query.id)
  if (!user) return null
  return <div>
    <ChanelInfo ChannelId={user.id} Logo={user.avatarPath} Name={user.name} subscribersCount={user.subscribersCount}
                description={user.description} />
    <div className={styles.VideoWrapper}>
      <h2 className={styles.title}>Video</h2>
      <hr className={styles.lines} />
      
      <VideoCardWrapper>
        {user ?
          user.videos.map((video) => <div key={video.id}>
            <VideoCard linkPatch={video.id} ImageUrl={video.thumbnailPath} VideoText={video.name}
                       ChannelPhoto={user.avatarPath} ChannelName={user.name}
                       views={video.views} ChannelVerified={user.isVerified} />
          </div>)
          : null}
      </VideoCardWrapper>
    </div>
  </div>
}

export default Id