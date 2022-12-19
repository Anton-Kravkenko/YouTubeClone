import Link from 'next/link'
import { FC } from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { GetMedia } from '../../../../utils/GetMedia'
import { getNumber } from '../../../../utils/GetNumber'
import styles from './Video-card.module.scss'
import { VideoCardInterface } from './videoCard.interface'

const VideoCard: FC<VideoCardInterface> = (props) => {
  return <div className={styles.wraper}>
    <Link href={`/watch/${props.linkPatch}`}>
      <img className={styles.image} src={GetMedia(props.ImageUrl)} />
      <h3 className={styles.VideoText}>{props.VideoText}</h3>
    </Link>
    <div className={styles.info}>
      <img className={styles.logo} src={GetMedia(props.ChannelPhoto)} />
      <div className={styles.ChannelWraper}>
        <p className={styles.ChannelName}>{props.ChannelName}</p>
        {props.ChannelVerified ? <IoIosCheckmark className={styles.verified} /> : null}
        <p className={styles.views}>{getNumber(props.views)}</p>
      </div>
    </div>
  </div>
}

export default VideoCard