import { Subscribes } from '../app/Components/ui/Subscribes/Subscribes'
import { api } from '../app/store/api/api'

const Folowers = () => {
  
  const { data: Profile, isLoading: ProfileLoading } = api.useGetProfileQuery(null)
  if (!Profile?.subscriptions.length) return <p>You not have folower!</p>
  return <div>
    {Profile?.subscriptions.map(({ toChannel }) => <div key={toChannel.id}>
      <Subscribes ChannelName={toChannel.name} LinkPatch={`Channel/${toChannel.id}`}
                  avatarUrl={toChannel.avatarPath} line />
    
    </div>)}
  
  </div>
}

export default Folowers