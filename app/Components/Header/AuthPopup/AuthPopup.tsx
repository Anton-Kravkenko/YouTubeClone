import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiUserCircle } from 'react-icons/bi'
import { GetMedia } from '../../../../utils/GetMedia'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import { useAction } from '../../../store/useAction'
import styles from './AuthPopup.module.scss'

const AuthPopup = () => {
  const { user } = useAuth()
  const { data: Channel, isLoading } = api.useGetProfileQuery(null)
  const { register, handleSubmit } = useForm()
  const [PopupTarget, setPopupTarget] = useState(false)
  const { register: RegisterForm, login, logout } = useAction()
  
  const HandleRegister = (data: any, e: any) => {
    e.preventDefault()
    RegisterForm(data)
  }
  const HandleLogin = (data: any, e: any) => {
    e.preventDefault()
    login(data)
  }
  
  if (Channel && user) return <>
    <img src={GetMedia(Channel.avatarPath)} alt={'Load..'} width={50} height={50}
         onClick={() => setPopupTarget(!PopupTarget)}
         className={styles.ChannelPhoto} />
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      animate={PopupTarget ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.1,
        default: { ease: 'easeInOut' },
      }}>
      <div className={styles.UserPopup}>
        <Link href={'/studio'}>
          <p className={styles.popupLink}>Studio</p>
        </Link>
        <p className={styles.popupLink}>Upload Video</p>
        <p className={styles.popupLink}>Settings</p>
        <p className={styles.popupLink} onClick={logout}>Logout</p>
      </div>
    </motion.div>
  </>
  
  return <>
    <BiUserCircle onClick={() => setPopupTarget(!PopupTarget)} className={styles.userPhoto} />
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      animate={PopupTarget ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.1,
        default: { ease: 'easeInOut' },
      }}>
      <form className={styles.UserPopup}>
        <input {...register('email')} placeholder={'Email'} />
        <input {...register('password')} placeholder={'Password'} />
        <div className={styles.ButtonWrapper}>
          <button className={styles.login} onClick={handleSubmit(HandleLogin)}>Login</button>
          <button className={styles.register} onClick={handleSubmit(HandleRegister)}>Register</button>
        </div>
      </form>
    </motion.div>
  </>
}

export default AuthPopup