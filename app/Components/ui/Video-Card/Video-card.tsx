import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { GetMedia } from '../../../../utils/GetMedia'
import { getNumber } from '../../../../utils/GetNumber'
import CardLoader from './CardLoader/CardLoader'
import styles from './Video-card.module.scss'
import { VideoCardInterface } from './videoCard.interface'

const VideoCard: FC<VideoCardInterface> = (props) => {
  return <div className={styles.wraper}>
    <Link href={`/watch/${props.linkPatch}`}>
      <div className={styles.VideoImageWrapper}>
        <Image height={1000} width={1000} alt={'Logo'} className={styles.logo} src={ props.ChannelPhoto ? GetMedia(props.ChannelPhoto) : 'https://johannesippen.com/img/blog/humans-not-users/header.jpg'} />
        <Image height={1000} width={1000} alt={'Image'} className={styles.image} src={GetMedia(props.ImageUrl)}/>
      </div>
      <p className={styles.ChannelName}>{props.ChannelName ? props.ChannelName : "No name"}</p>
      <h3 className={styles.VideoText}>{props.VideoText}</h3>
    </Link>
    <div className={styles.info}>
      <p className={styles.views}>{getNumber(props.views)} views</p>
      <p className={styles.timeAgo}>{moment(props.createdAt).startOf('minute').fromNow()}</p>
    </div>
  </div>
}

export default VideoCard