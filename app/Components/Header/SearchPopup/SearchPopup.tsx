import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { HiOutlineSearch } from 'react-icons/hi'
import { variants } from '../../../../utils/PopupAnimation'
import { useDebounce } from '../../../../utils/useDebaunce'
import { videoApi } from '../../../store/api/video.api'
import VideoCard from '../../ui/Video-Card/Video-card'
import SearchPopupDiv from './SearchPopupDiv'
import styles from './SearchPopup.module.scss'

const SearchPopup = () => {
  const { register, watch } = useForm()
  const debounceSearch = useDebounce(watch('Search'), 500)
  const { data } = videoApi.useGetVideosBySearchTermQuery(debounceSearch, {
    skip: !debounceSearch,
    selectFromResult: ({ data }) => ({ data: data?.slice(0, 3) }),
  })
  return <div className={styles.SearchDivWrapper}>
    
    <div className={styles.wrapper}>
      <HiOutlineSearch className={styles.icon} />
      <input {...register('Search')} className={styles.inputs} placeholder='Type to search...' />
    </div>
    <SearchPopupDiv data={data} debounceSearch={debounceSearch}/>
  </div>
}

export default SearchPopup