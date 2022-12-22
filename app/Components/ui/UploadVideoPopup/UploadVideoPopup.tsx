import { motion } from 'framer-motion'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { videoApi } from '../../../store/api/video.api'
import styles from './UploadVideoPopup.module.scss'

const UploadVideoPopup = () => {
  const { register, handleSubmit, watch, reset } = useForm()
  const { ref, setIsShow, isShow } = useOutside(false)
  const [upload] = api.useUploadMediaMutation()
  const [createVideo, { data: Videoid }] = videoApi.useCreateVideoMutation()
  const [VideoStage, setVideoStage] = useState(false)
  const [updateVideo] = videoApi.useUpdateVideoMutation()
  const UpdateInfo = async (data: any) => {
    const media = new FormData()
    media.append('media', data.thumbnailPath[0])
    await upload(media).unwrap().then(() => {
      const VideoData = {
        name: data.name,
        description: data.description,
        videoPath: `/uploads/default/${data.video[0].name}`,
        thumbnailPath: `/uploads/default/${data.thumbnailPath[0].name}`,
        isPublic: true,
      }
      updateVideo({ ...VideoData, id: Videoid })
      reset()
      setIsShow(false)
      setVideoStage(false)
    })
    
  }
  const VideoSubmit = async (data: any) => {
    const media = new FormData()
    if (data.video[0].type == 'video/mp4') {
      media.append('media', data.video[0])
      await createVideo().unwrap().then(id => upload(media).unwrap().then(() => {
        setVideoStage(true)
      }))
    }
    
    
  }
  return <div>
    <button onClick={() => setIsShow(!isShow)} className={styles.Button}>Add new video</button>
    
    <motion.div
      ref={ref}
      className={styles.Popup}
      initial={{ opacity: '0' }}
      viewport={{ once: true }}
      animate={isShow ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.1,
        yoyo: Infinity,
        default: { ease: 'easeInOut' },
      }}>
      {!VideoStage ? <div className={styles.LoadWrapper}>
          <div>
            <form onSubmit={handleSubmit(VideoSubmit)}>
              <p className={styles.LoadText}>Load video 👇</p>
              <input {...register('video')} className={styles.file}
                     type={'file'} />
              <button className={styles.SubmitButton} type={'submit'}>Send...</button>
            </form>
          </div>
        </div>
        :
        <div className={styles.InfoWrapper}>
          <form onSubmit={handleSubmit(UpdateInfo)} className={styles.info}>
            <input  {...register('name')} placeholder={'Enter name...'} className={styles.field} />
            
            <textarea  {...register('description')} placeholder={'Enter Description...'} className={styles.area} />
            
            <input {...register('thumbnailPath')} className={styles.file}
                   type={'file'} />
            <button type={'submit'} className={styles.SendButton}>Send...</button>
          </form>
          
          <div className={styles.Views}>
            <div className={styles.CardWrapper}>
              <h3>{watch('name')}</h3>
              <p>{watch('description')}</p>
            </div>
          </div>
        </div>}
    </motion.div>
  </div>
}

export default UploadVideoPopup