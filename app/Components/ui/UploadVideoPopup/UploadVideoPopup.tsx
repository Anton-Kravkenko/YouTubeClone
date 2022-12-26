import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { useOutside } from '../../../../utils/hook/useOutside'
import { api } from '../../../store/api/api'
import { videoApi } from '../../../store/api/video.api'
import styles from './UploadVideoPopup.module.scss'
import UploadVideoPopupDiv from './UploadVideoPopupDiv'

const UploadVideoPopup = () => {
  const { register, handleSubmit, watch, reset } = useForm()
  const { ref, setIsShow, isShow } = useOutside(false)
  const [upload, {isLoading}] = api.useUploadMediaMutation()
  const [createVideo, { data: Videoid }] = videoApi.useCreateVideoMutation()
  const [VideoStage, setVideoStage] = useState(false)
  const [updateVideo] = videoApi.useUpdateVideoMutation()
  const UpdateInfo = async (data: any) => {
    const media = new FormData()
    media.append('media', data.thumbnailPath[0])
    await upload(media).unwrap().then(() => {
      const VideoData = {
        name: data.name,
        description: data.description,
        videoPath: `/uploads/default/${data.video[0].name}`,
        thumbnailPath: `/uploads/default/${data.thumbnailPath[0].name}`,
        isPublic: true,
      }
      updateVideo({ ...VideoData, id: Videoid })
      reset()
      setIsShow(false)
      toastr.info('Video', 'Success upload!')
      setVideoStage(false)
    })
    
  }
  const VideoSubmit = async (data: any) => {
    const media = new FormData()
    if (data.video[0].type == 'video/mp4') {
      media.append('media', data.video[0])
      await createVideo().unwrap().then(id => upload(media).unwrap().then(() => {
        setVideoStage(true)
      }))
    }
    
    
  }
  return <div>
    <button onClick={() => setIsShow(!isShow)} className={styles.Button}>Add new video</button>
    <UploadVideoPopupDiv FileLoading={isLoading} isShow={isShow} setIsShow={setIsShow} ComponentsRef={ref} VideoStage={VideoStage} VideoSubmit={VideoSubmit} UpdateInfo={UpdateInfo}/>
  </div>
}

export default UploadVideoPopup