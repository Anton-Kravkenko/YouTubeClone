import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { BiUserCircle } from 'react-icons/bi'
import { variants } from '../../../../utils/PopupAnimation'
import { useAuth } from '../../../store/auth/useAuth'
import { PopupInterface } from '../../../../shared/types/Popup.interface'
import styles from './AuthPopup.module.scss'

const AuthPopupDiv:FC<PopupInterface> = (props) => {
  const { register, handleSubmit } = useForm()
  const {user} = useAuth()
    if (props.Channel && props.user) return <>

    <motion.div
      ref={props.ComponentsRef}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      animate={props.isShow ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.5,
        default: { ease: 'circOut' },
      }}>
      <div className={styles.UserPopup}>
        <Link href={`/Channel/${user?.id}`}>
        <p className={styles.popupLink}>My channel</p>
        </Link>
        <Link href={'/studio'}>
          <p className={styles.popupLink}>Studio</p>
        </Link>
        <p className={styles.popupLink} onClick={props.logout}>Logout</p>
      </div>
    </motion.div>
  </>
  
    return <>
    <AnimatePresence>
    
      <motion.div
        key='modal'
        initial={false}
        exit={{ display: 'none' }}
        animate={props.isShow ? 'open' : 'closed'}
        variants={variants}
    
      >
        <form className={styles.UserPopup}>
          <input {...register('email')} placeholder={'Email'} />
          <input {...register('password')} placeholder={'Password'} />
          <div className={styles.ButtonWrapper}>
            <button className={styles.login} onClick={handleSubmit(props.HandleLogin)}>Login</button>
            <button className={styles.register} onClick={handleSubmit(props.HandleRegister)}>Register</button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
    
  </>
}

export default AuthPopupDiv