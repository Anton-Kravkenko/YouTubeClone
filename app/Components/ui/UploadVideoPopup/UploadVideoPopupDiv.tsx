import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { videoApi } from '../../../store/api/video.api'
import { PopupInterface } from '../../../../shared/types/Popup.interface'
import styles from './UploadVideoPopup.module.scss'

const UploadVideoPopupDiv:FC<PopupInterface> = (props) => {
  const { register, handleSubmit, watch, reset } = useForm()
  const [VideoImage, setVideoImage] = useState('')
console.log(VideoImage)
  return <div>
    <motion.div
      ref={props.ComponentsRef}
      className={styles.Popup}
      initial={{ opacity: '0' }}
      viewport={{ once: true }}
      animate={props.isShow ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.1,
        yoyo: Infinity,
        default: { ease: 'easeInOut' },
      }}>
      {!props.VideoStage ? <div className={styles.LoadWrapper}>
          <div>
            <form onSubmit={handleSubmit(props.VideoSubmit)}>
              <p className={styles.LoadText}>{!props.FileLoading ? "Load video 👇" : 'Loading...' }</p>
              <input {...register('video')} className={styles.file}
                     type={'file'} />
              <button className={styles.SubmitButton} type={'submit'}>Send...</button>
            </form>
          </div>
        </div>
        :
        <div className={styles.InfoWrapper}>
          <form onSubmit={handleSubmit(props.UpdateInfo)} className={styles.info}>
            <input  {...register('name')} placeholder={'Enter name...'} className={styles.field} />
            
            <textarea  {...register('description')} placeholder={'Enter Description...'} className={styles.area} />
            
            <input {...register('thumbnailPath')} className={styles.file}
                   type={'file'} onChange={() => setVideoImage(watch('thumbnailPath'))} />
            <button type={'submit'} className={styles.SendButton}>Send...</button>
          </form>
          
          <div className={styles.Views}>
            <div className={styles.CardWrapper}>
              <Image src={VideoImage || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} alt={'VideoImage'}/>
              <h3>{watch('name')}</h3>
              <p>{watch('description')}</p>
            </div>
          </div>
        </div>}
    </motion.div>
  </div>
}

export default UploadVideoPopupDiv