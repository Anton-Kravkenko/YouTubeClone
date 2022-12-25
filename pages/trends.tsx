import Head from 'next/head'
import CardLoader from '../app/Components/ui/Video-Card/CardLoader/CardLoader'
import VideoCard from '../app/Components/ui/Video-Card/Video-card'
import VideoCardWrapper from '../app/Components/ui/Video-Card/VideoCardWrapper'
import { videoApi } from '../app/store/api/video.api'

const Trends = () => {
  const { data, isLoading, error } = videoApi.useGetTrendingVideoQuery()
  return <div>
    <Head>
      <title>Trends</title>
      <meta name='description' content='Trends' />
      <link rel='icon' href='/Dakirby309-Simply-Styled-YouTube.ico' />
    </Head>
    <h2 style={{
      margin: '10px 0px 30px 0px',
    }}>Trends</h2>
    <VideoCardWrapper>
      {isLoading && <CardLoader count={10} />}
      {data?.map((item) => (
        <VideoCard createdAt={item.createdAt} key={item.id} views={item.views} ChannelVerified={item.user.isVerified}
                   ChannelName={item.user.name}
                   ChannelPhoto={item.user.avatarPath}
                   VideoText={item.name}
                   linkPatch={item.id}
                   ImageUrl={item.thumbnailPath} />
      
      ))}
    </VideoCardWrapper>
  </div>
}

export default Trends