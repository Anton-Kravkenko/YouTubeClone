import { motion } from 'framer-motion'
import { FC } from 'react'
import { iVideo } from '../../../../shared/types/Video.types'
import { variants } from '../../../../utils/PopupAnimation'
import VideoCard from '../../ui/Video-Card/Video-card'
import styles from './SearchPopup.module.scss'

const SearchPopupDiv:FC<{data: any, isShow: boolean, ComponentRef: any}> = ({data, isShow, ComponentRef}) => {
  return <>
    {data?.length ?
      <motion.div
        ref={ComponentRef}
        className={styles.Popup}
        initial={{ opacity: '0' }}
        viewport={{ once: true }}
        animate={isShow ? 'open' : 'closed'}
        variants={variants}
        transition={{
          delay: 0.1,
          yoyo: Infinity,
          default: { ease: 'easeInOut' },
        }}>
        <div className={styles.Searchwrapper}>
          {data?.map((video:iVideo) => <div className={styles.CardWrapper} key={video.id}>
            <VideoCard createdAt={video.createdAt} linkPatch={video.id} ImageUrl={video.thumbnailPath}
                       VideoText={video.name}
                       ChannelPhoto={video.user.avatarPath} ChannelName={video.user.name}
                       views={video.views} ChannelVerified={video.user.isVerified} />
          </div>)}
        </div>
      </motion.div> : null}
  </>
}

export default SearchPopupDiv