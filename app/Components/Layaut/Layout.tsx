
import { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import LeftBar from '../LeftBar/LeftBar'
import styles from './Layout.module.scss'
const Layout:FC<PropsWithChildren> = ({children}) => {
  return  <div className={styles.mainWrapper}  >
    <LeftBar />
    <div className={styles.contentWrapper}>
    <Header />
     {children}
    </div>
  </div>
}

export default Layout