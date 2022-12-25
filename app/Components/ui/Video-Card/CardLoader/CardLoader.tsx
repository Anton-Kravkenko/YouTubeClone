import React, { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './Video-card-Loader.module.scss'
const CardLoader = () => {
return <div className={styles.wraper}>
    <div className={styles.VideoImageWrapper}>
      <Skeleton className={styles.image} borderRadius={15} />
    </div>
    <Skeleton className={styles.ChannelName} height={30} />
    <Skeleton className={styles.VideoText}/>
  <div className={styles.info}>
    <Skeleton className={styles.views}/>
    <Skeleton className={styles.timeAgo}/>
  </div>
</div>
}



export default CardLoader