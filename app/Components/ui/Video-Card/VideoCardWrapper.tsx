import { FC, PropsWithChildren } from 'react'
import styles from './Video-card.module.scss'

const VideoCardWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.CardWrapper}>
    {children}
  </div>
}

export default VideoCardWrapper