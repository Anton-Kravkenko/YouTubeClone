import { motion } from 'framer-motion'

import { useForm } from 'react-hook-form'
import { useOutside } from '../../../../utils/hook/useOutside'
import { variants } from '../../../../utils/PopupAnimation'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import styles from './SettingsPopup.module.scss'
import SettingsPopupDiv from './SettingsPopupDiv'

const SettingsPopup = () => {

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
    <SettingsPopupDiv isShow={isShow} setIsShow={setIsShow} ComponentsRef={ref} SettingsSubmit={SettingsSubmit}/>
  </div>
}

export default SettingsPopup