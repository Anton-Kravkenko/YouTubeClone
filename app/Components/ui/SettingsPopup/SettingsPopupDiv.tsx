import { motion } from 'framer-motion'
import { FC } from 'react'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import { PopupInterface } from '../../../../shared/types/Popup.interface'
import styles from './SettingsPopup.module.scss'

const SettingsPopupDiv:FC<PopupInterface> = (props) => {
  
  const { register, handleSubmit } = useForm()
  return <>
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
      <div className={styles.Searchwrapper}>
        <form onSubmit={handleSubmit(props.SettingsSubmit)}>
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
  </>
}

export default SettingsPopupDiv