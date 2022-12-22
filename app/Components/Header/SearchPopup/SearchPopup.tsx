import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { HiOutlineSearch } from 'react-icons/hi'
import { variants } from '../../../../utils/PopupAnimation'
import { useDebounce } from '../../../../utils/useDebaunce'
import { videoApi } from '../../../store/api/video.api'
import VideoCard from '../../ui/Video-Card/Video-card'
import styles from './SearchPopup.module.scss'

const SearchPopup = () => {
  const { register, watch } = useForm()
  const debounceSearch = useDebounce(watch('Search'), 500)
  const { data } = videoApi.useGetVideosBySearchTermQuery(debounceSearch, {
    selectFromResult: ({ data }) => ({ data: data?.slice(0, 3) }),
  })
  return <div style={{
    width: '100%',
  }}>
    
    <div className={styles.wrapper}>
      <HiOutlineSearch className={styles.icon} />
      <input {...register('Search')} className={styles.inputs} placeholder='Type to search...' />
    </div>
    {data?.length ?
      <motion.div
        className={styles.Popup}
        initial={{ opacity: '0' }}
        viewport={{ once: true }}
        animate={debounceSearch ? 'open' : 'closed'}
        variants={variants}
        transition={{
          delay: 0.1,
          yoyo: Infinity,
          default: { ease: 'easeInOut' },
        }}>
        <div className={styles.Searchwrapper}>
          {data?.map((video) => <div key={video.id}>
            <VideoCard createdAt={video.createdAt} linkPatch={video.id} ImageUrl={video.thumbnailPath}
                       VideoText={video.name}
                       ChannelPhoto={video.user.avatarPath} ChannelName={video.user.name}
                       views={video.views} ChannelVerified={video.user.isVerified} />
          </div>)}
        </div>
      </motion.div> : null}
  </div>
}

export default SearchPopup