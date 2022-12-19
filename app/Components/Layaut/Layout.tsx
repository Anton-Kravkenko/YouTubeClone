
import { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import LeftBar from '../LeftBar/LeftBar'
const Layout:FC<PropsWithChildren> = ({children}) => {
  return  <div style={{display: 'flex', width: '100%'}} >
    <LeftBar />
    <div style={{display: 'block', width: '100%', padding: '25px'}}>
    <Header />
     {children}
    </div>
  </div>
}

export default Layout