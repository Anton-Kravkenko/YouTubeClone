import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { variants } from '../../../../utils/PopupAnimation'
import styles from './SearchPopup.module.scss'

const SearchPopup = () => {
  const [PopupTarget, setPopupTarget] = useState(false)
  
  return <div style={{
    width: '100%',
  }}>
    
    <div className={styles.wrapper}>
      <HiOutlineSearch className={styles.icon} />
      <input className={styles.inputs} onChange={() => setPopupTarget(!PopupTarget)} placeholder='Type to search...' />
    </div>
    
    <motion.div
      className={styles.Popup}
      initial={{ opacity: '0' }}
      viewport={{ once: true }}
      animate={PopupTarget ? 'open' : 'closed'}
      variants={variants}
      transition={{
        delay: 0.1,
        yoyo: Infinity,
        default: { ease: 'easeInOut' },
      }}>
      {/*Card*/}
    </motion.div>
  </div>
}

export default SearchPopup