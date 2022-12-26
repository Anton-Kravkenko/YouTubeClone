import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineSearch } from 'react-icons/hi'
import { useOutside } from '../../../../utils/hook/useOutside'
import { useDebounce } from '../../../../utils/useDebaunce'
import { videoApi } from '../../../store/api/video.api'
import SearchPopupDiv from './SearchPopupDiv'
import styles from './SearchPopup.module.scss'
const SearchPopup = () => {
  const { register, watch } = useForm()
  const {ref, setIsShow,isShow} = useOutside(false)
  const debounceSearch = useDebounce(watch('Search'), 500)
  //Check for set IsShow in popup
  useEffect(() => {
  if (debounceSearch) {setIsShow(true)}
  }, [debounceSearch])
  
  const { data } = videoApi.useGetVideosBySearchTermQuery(debounceSearch, {
    skip: !debounceSearch,
    selectFromResult: ({ data }) => ({ data: data?.slice(0, 3) }),
  })
  return <div className={styles.SearchDivWrapper}>
    
    <div className={styles.wrapper}>
      <HiOutlineSearch className={styles.icon} />
      <input {...register('Search')} className={styles.inputs} placeholder='Type to search...' />
    </div>
    <SearchPopupDiv ComponentRef={ref} data={data} isShow={isShow}/>
  </div>
}

export default SearchPopup