import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootAction } from './rootAction'

export const useAction = () => {
  const dispatch = useDispatch()
  
  return bindActionCreators(RootAction, dispatch)
}