import Skeleton from 'react-loading-skeleton'
import CardLoader from '../app/Components/ui/Video-Card/CardLoader/CardLoader'
import VideoCard from '../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../app/Components/ui/Video-Card/VideoCardWrapper'
import { videoApi } from '../app/store/api/video.api'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const { data, isLoading, error } = videoApi.useGetAllVideoQuery()
  return (
    <div>
      <h2 style={{
        margin: '10px 0px 30px 0px',
      }}>Explore</h2>
      <VideoCardWrapper>
        {data?.map((item) => (
          isLoading ? <CardLoader key={item.id}/> :
          <VideoCard createdAt={item.createdAt} key={item.id} linkPatch={item.id} views={item.views}
                     ChannelVerified={item.user.isVerified}
                     ChannelName={item.user.name}
                     ChannelPhoto={item.user.avatarPath}
                     VideoText={item.name}
                     ImageUrl={item.thumbnailPath} />
        ))}
      </VideoCardWrapper>
    
    
    </div>
  )
}
