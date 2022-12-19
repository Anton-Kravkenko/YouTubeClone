import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import ChanelInfo from '../../app/Components/ui/Chanel-info/ChanelInfo'
import ComentElement from '../../app/Components/ui/Coment-Element/ComentElement'
import { videoApi } from '../../app/store/api/video.api'

import { GetMedia } from '../../utils/GetMedia'
import { getNumber } from '../../utils/GetNumber'
import styles from './watch.module.scss'

const Id = () => {
  
  const router: any = useRouter()
  const { data: video, isLoading } = videoApi.useGetVideoByIdQuery(router.query.id)
  const [upadateviews] = videoApi.useUpdateViewsMutation()
  const [upadateLikes] = videoApi.useUpdateLikesMutation()
  useEffect(() => {
    video ? upadateviews(video.id) : null
  }, [])
  
  if (!video) return null
  
  return <div>
    <div className={styles.wrapper}>
      <div style={{ width: '100%' }}>
        <iframe className={styles.Frame} src={GetMedia(video.videoPath)} />
        <div className={styles.VideoInfoWrapper}>
          <div>
            <h2 className={styles.VideoTitle}>{video.name}</h2>
            <h3 className={styles.viewsCount}>{getNumber(video.views)} views</h3>
          </div>
          <div onClick={() => upadateLikes(video.id)} className={styles.LikesWrapper}>
            <RiHeart2Line className={styles.LikesIcon} />
            <p className={styles.LikesCount}>{getNumber(video.likes)}</p>
          </div>
        </div>
        <hr className={styles.lines} />
      </div>
      
      
      <div className={styles.CommentWrapper}>
        <p className={styles.title}>Comments</p>
        <hr className={styles.lines} />
        
        <ComentElement Logo={'http://localhost:4200/uploads/avatar/red-group.jpg'}
                       Coment={'Очень крутой контент, мне очень нравиться'} Name={'Red Group'} />
        
        <input placeholder='Write you comment...' className={styles.input} />
      
      </div>
    </div>
    <div className={styles.bottomWrapper}>
      <div className={styles.ChanelInfoWrapper}>
        <ChanelInfo ChannelId={video.user.id} linkUrl={`/Channel/${video.user.id}`} Logo={video.user.avatarPath}
                    Name={video.user.name}
                    subscribersCount={video.user.subscribersCount}
                    description={video.description} />
      </div>
    
    </div>
  </div>
}

export default Id