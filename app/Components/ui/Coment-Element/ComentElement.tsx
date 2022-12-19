import { FC } from 'react'
import styles from './ComentElement.module.scss'
export interface IComent {
  Logo: string,
  Name: string,
  Coment: string
}
const ComentElement:FC<IComent> = ({Logo, Name,Coment}) => {
  return   <div className={styles.userWrapper}>
    <img className={styles.UserLogo} src={Logo}/>
    <div>
      <h2 className={styles.UserName}>{Name}</h2>
      <p className={styles.UserDescription}>{Coment}</p>
    </div>
  </div>
}

export default ComentElement