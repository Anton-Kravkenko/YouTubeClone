import Link from 'next/link'
import { api } from '../../store/api/api'
import { useAuth } from '../../store/auth/useAuth'
import { NavigateElement } from '../ui/Mavigate-element/Navigate-element'
import { Subscribes } from '../ui/Subscribes/Subscribes'
import styles from './LeftBar.module.scss'

const LeftBar = () => {
  const { user } = useAuth()
  const { data: Profile, isLoading: ProfileLoading } = api.useGetProfileQuery(null)
  return <div className={styles.LeftBarWrapper}>
    <Link href={'/'}>
      <h1 className={styles.LogoText}>AntonTube</h1>
    </Link>
    <NavigateElement LinkPatch={'/'} IconText='Explore' iconName={'MdOutlineExplore'} />
    <NavigateElement LinkPatch={'/trends'} IconText='Trends' iconName={'MdOutlineTrendingUp'} />
    
    {user ? <> <NavigateElement LinkPatch={`/Folowers`} IconText='Subscribers'
                                iconName={'MdSubscriptions'} />
        <NavigateElement LinkPatch={`/studio`} IconText='Studio' iconName={'MdStars'} />
        <hr className={styles.lines} />
        
        <h2 className={styles.title}>My subscribers</h2>
        
        {Profile?.subscriptions ? Profile?.subscriptions.map(({ toChannel }) => <div key={toChannel.id}>
          <Subscribes ChannelName={toChannel.name} LinkPatch={`Channel/${toChannel.id}`}
                      avatarUrl={toChannel.avatarPath} line={false} />
        
        </div>) : null}
      </>
      : null}
    
    <hr className={styles.lines} />
    
    <p className={styles.description}>2023 Youtube-Clone <br /> by
      Anton Kravkenko </p>
  
  </div>
}

export default LeftBar