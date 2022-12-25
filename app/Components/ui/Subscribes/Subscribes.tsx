import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { GetMedia } from '../../../../utils/GetMedia'
import styles from './Subscribes.module.scss'

export const Subscribes: FC<{ ChannelName: string, line?: boolean, LinkPatch: string, avatarUrl: string }> = ({
                                                                                                                ChannelName,
                                                                                                                LinkPatch,
                                                                                                                avatarUrl,
                                                                                                                line,
                                                                                                              }) => {
  return (
    <Link href={LinkPatch}>
      <div className={styles.wrapper}>
    <Image height={100} width={100} alt={'Avatar'} src={avatarUrl ? GetMedia(avatarUrl) : 'https://johannesippen.com/img/blog/humans-not-users/header.jpg'} className={styles.logo} />
      
        <p className={styles.text}>{ChannelName ? ChannelName : "No name"}</p>
      </div>
      {line ? <hr className={styles.lines} /> : null}
    </Link>
  )
}