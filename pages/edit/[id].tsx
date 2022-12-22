import { useRouter } from 'next/router'

const Id = () => {
  const router = useRouter()
  return <div>
    <p>  {router.query.id}</p>
  </div>
}

export default Id