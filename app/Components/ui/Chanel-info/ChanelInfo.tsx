import Image from 'next/image'
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
        {Logo ? <Image height={100} width={100} alt={'Logo'} className={styles.Logo} src={GetMedia(Logo)} /> : <Image height={100} width={100} alt={'Logo'} className={styles.Logo} src={'https://johannesippen.com/img/blog/humans-not-users/header.jpg'} />}
        
        <div>
          <h2 className={styles.ChannelName}>{Name  ? Name : <p>No name</p>}</h2>
          {subscribersCount ? <p className={styles.SubscribersCount}>{getNumber(subscribersCount)} folowers</p> : null}
        </div>
      </Link>
      <SubscribeButton ChannelId={ChannelId} />
    </div>
    <p className={styles.Channeldescription}>{description ? description : <p>None description</p>} </p>
  </>
}

export default ChanelInfo