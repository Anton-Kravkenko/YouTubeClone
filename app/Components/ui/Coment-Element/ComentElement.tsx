import Image from 'next/image'
import { FC } from 'react'
import { GetMedia } from '../../../../utils/GetMedia'
import styles from './ComentElement.module.scss'

export interface IComent {
  Logo: string,
  Name: string,
  Coment: string
}

const ComentElement: FC<IComent> = ({ Logo, Name, Coment }) => {
  return <div className={styles.userWrapper}>
    <Image height={100} alt={'Logo'}  className={styles.UserLogo} width={100} src={GetMedia(Logo)} />
    <div>
      <h2 className={styles.UserName}>{Name}</h2>
      <p className={styles.UserDescription}>{Coment}</p>
    </div>
  </div>
}

export default ComentElement