import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { BiUserCircle } from 'react-icons/bi'
import { GetMedia } from '../../../../utils/GetMedia'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import { useAction } from '../../../store/useAction'
import styles from './AuthPopup.module.scss'
import AuthPopupDiv from './AuthPopupDiv'

const AuthPopup = () => {
  const { user } = useAuth()
  const { data: Channel, isLoading } = api.useGetProfileQuery(null)
  const { register: RegisterForm, login, logout } = useAction()
  const { ref, setIsShow, isShow } = useOutside(false)
  const router = useRouter()
  const HandleRegister = async (data: any, e: any) => {
    e.preventDefault()
    await RegisterForm(data)
  }
  const HandleLogin = async (data: any, e: any) => {
    e.preventDefault()
    await login(data)
  }
  const HandleLogout = async (data: any, e: any) => {
    await logout()
  }

  return <>
    {Channel && user ? <Image  width={50} height={50} src={Channel.avatarPath ? GetMedia(Channel.avatarPath) : 'https://johannesippen.com/img/blog/humans-not-users/header.jpg'}
                      alt={'Logo'} onClick={() => setIsShow(!isShow)} className={styles.ChannelPhoto} /> :  <BiUserCircle onClick={() => setIsShow(!isShow)} className={styles.userPhoto} /> }
    
    
    <AuthPopupDiv  Channel={Channel} isShow={isShow} setIsShow={setIsShow} ComponentsRef={ref} user={user} logout={HandleLogout} HandleRegister={HandleRegister} HandleLogin={HandleLogin}/>
  </>
}

export default AuthPopup