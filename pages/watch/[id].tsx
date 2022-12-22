import moment from 'moment/moment'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import ChanelInfo from '../../app/Components/ui/Chanel-info/ChanelInfo'
import ComentElement from '../../app/Components/ui/Coment-Element/ComentElement'
import { commentApi } from '../../app/store/api/comment.api'
import { videoApi } from '../../app/store/api/video.api'
import styles from '../../styles/watch.module.scss'

import { GetMedia } from '../../utils/GetMedia'
import { getNumber } from '../../utils/GetNumber'

const Id = () => {
  
  const router: any = useRouter()
  const { data: video, isLoading } = videoApi.useGetVideoByIdQuery(router.query.id)
  const [upadateviews] = videoApi.useUpdateViewsMutation()
  const { handleSubmit, register, reset } = useForm()
  const [createComment] = commentApi.useCreateCommentMutation()
  useEffect(() => {
    video ? upadateviews(video.id) : null
  }, [router.query.id])
  
  if (!video) return null
  const SendComment = (data: any) => {
    createComment({ ...data, videoId: video.id }).unwrap().then(() => reset())
  }
  return <div>
    <div className={styles.wrapper}>
      <div style={{ width: '100%' }}>
        <iframe className={styles.Frame} src={GetMedia(video.videoPath)} />
        <div className={styles.VideoInfoWrapper}>
          <div>
            <h2 className={styles.VideoTitle}>{video.name}</h2>
            <div style={{
              display: 'flex',
              gap: '10px',
            }}>
              <h3 className={styles.viewsCount}>{getNumber(video.views)} views</h3>
              <h3 className={styles.CreateData}>{moment(video.createdAt).startOf('day').fromNow()}</h3>
            </div>
          </div>
        
        </div>
        <hr className={styles.lines} />
      </div>
      
      
      <div className={styles.CommentWrapper}>
        <p className={styles.title}>Comments</p>
        <hr className={styles.lines} />
        {video.comments.map((coment) => <div key={coment.id}>
          <ComentElement Logo={coment.user.avatarPath}
                         Coment={coment.message} Name={coment.user.name} />
        </div>)}
        
        <form onSubmit={handleSubmit(SendComment)} className={styles.CommentSendWrapper}>
          <input {...register('message')} placeholder='Write you comment...' className={styles.input} />
          <button
            className={styles.SendButton}
            disabled={isLoading}
          >
            <MdSend className={styles.SendIcon} />
          </button>
        </form>
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