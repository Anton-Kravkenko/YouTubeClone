import AuthPopup from './AuthPopup/AuthPopup'
import styles from './Header.module.scss'
import SearchPopup from './SearchPopup/SearchPopup'

const Header = () => {
  
  
  return <div className={styles.headerWraper}>
    <SearchPopup />
    
    <AuthPopup />
  
  </div>
}

export default Header