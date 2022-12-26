import { motion } from 'framer-motion'
import { FC } from 'react'
import { Simulate } from 'react-dom/test-utils'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import { PopupInterface } from '../../../../shared/types/Popup.interface'
import styles from './SettingsPopup.module.scss'
import error = Simulate.error

const SettingsPopupDiv:FC<PopupInterface> = (props) => {
  
  const { register, handleSubmit,  formState: { errors }} = useForm()
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
          <input {...register('email', {required: true}) } className={styles.field} placeholder={'Enter Email...'} />
          {errors.email && <span>You need to write your email, if you dont want to change your email, just write your past email.😔</span>}
          
          <input {...register('name', {required: true})} className={styles.field} placeholder={'Enter Name'} />
          {errors.name && <span>You need name, you have it, right?</span>}
          
          <textarea  {...register('description', {required: true})} className={styles.field}
                     placeholder={'Enter Description'} />
          {errors.description && <span>You need description🙂</span>}
          <input {...register('avatarPath', {required: true})} type={'file'} className={styles.file} />
          {errors.avatarPath && <span> If I dont see a picture of you, Im gonna start crying 😭</span>}
         
          <button type={'submit'}   aria-invalid={errors.mail ? "true" : "false"}  className={styles.button}>Confirm</button>
   
        </form>
      </div>
    </motion.div>
  </>
}

export default SettingsPopupDiv