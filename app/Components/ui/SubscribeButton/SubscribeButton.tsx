import classNames from 'classnames'
import { FC } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../store/auth/useAuth'
import styles from './SubscribeButton.module.scss'

const SubscribeButton: FC<{ ChannelId: number }> = ({ ChannelId }) => {
  const { user } = useAuth()
  
  const { data: Profile, isLoading: ProfileLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })
  
  const [Subscribe, { data, isLoading }] = api.useSubscribeToChannelMutation()
  if (user?.id === ChannelId || !user) return null
  const isSubscriber = Profile?.subscriptions?.some(sub => sub.toChannel.id === ChannelId) || data
  return <>
    
    <div onClick={() => Subscribe(ChannelId).unwrap()} className={classNames(styles.SubscribeButton, {
      [styles.ActiveSubscribeButton]: isSubscriber,
    })}>
      <AiOutlineUserAdd className={styles.SubIcon} />
      <p className={styles.SubText}>{isSubscriber ? 'Alredy folower' : 'Folow'}</p>
    </div>
  </>
}

export default SubscribeButton