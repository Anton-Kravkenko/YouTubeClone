import { motion } from 'framer-motion'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import styles from './SettingsPopup.module.scss'

const SettingsPopup = () => {
  const { register, handleSubmit } = useForm()
  const { ref, setIsShow, isShow } = useOutside(false)
  const { user } = useAuth()
  const [upload] = api.useUploadMediaMutation()
  const [UploadUserData] = api.useUploadUserdataMutation()
  const SettingsSubmit = async (data: any) => {
    var media = new FormData()
    media.append('media', data.avatarPath[0])
    await upload(media).unwrap().then((image) => {
      data.avatarPath = image.url
      UploadUserData({ id: user?.id, data: data })
    })
    
  }
  
  return <div>
    <button onClick={() => setIsShow(!isShow)} className={styles.Button}>Setting</button>
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
      <div className={styles.Searchwrapper}>
        <form onSubmit={handleSubmit(SettingsSubmit)}>
          <h3>Settings</h3>
          <input {...register('email')} className={styles.field} placeholder={'Enter Email...'} />
          <input {...register('name')} className={styles.field} placeholder={'Enter Name'} />
          <textarea  {...register('description')} className={styles.field}
                     placeholder={'Enter Description'} />
          <input {...register('avatarPath')} type={'file'} className={styles.file} />
          <button type={'submit'} className={styles.button}>Confirm</button>
        </form>
      </div>
    </motion.div>
  </div>
}

export default SettingsPopup