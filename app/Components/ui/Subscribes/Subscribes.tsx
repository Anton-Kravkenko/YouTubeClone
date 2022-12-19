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
        <img src={GetMedia(avatarUrl)} className={styles.logo} />
        <p className={styles.text}>{ChannelName}</p>
      </div>
      {line ? <hr className={styles.lines} /> : null}
    </Link>
  )
}