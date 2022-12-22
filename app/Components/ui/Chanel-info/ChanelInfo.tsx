import Link from 'next/link'
import { FC } from 'react'
import { GetMedia } from '../../../../utils/GetMedia'
import { getNumber } from '../../../../utils/GetNumber'
import SubscribeButton from '../SubscribeButton/SubscribeButton'
import styles from './ChanelInfo.module.scss'

export interface IComent {
  Logo: string,
  Name: string,
  subscribersCount: number,
  description: string
  linkUrl?: string
  ChannelId: number
}

const ChanelInfo: FC<IComent> = ({ Logo, Name, subscribersCount, description, linkUrl, ChannelId }) => {
  return <>
    
    <div className={styles.ChannelWrapper}>
      <Link href={linkUrl || ''} className={styles.UserInfo}>
        <img alt={'Logo'} className={styles.Logo} src={GetMedia(Logo)} />
        <div>
          <h2 className={styles.ChannelName}>{Name}</h2>
          {subscribersCount ? <p className={styles.SubscribersCount}>{getNumber(subscribersCount)} folowers</p> : null}
        </div>
      </Link>
      <SubscribeButton ChannelId={ChannelId} />
    </div>
    <p className={styles.Channeldescription}>{description} </p>
  </>
}

export default ChanelInfo