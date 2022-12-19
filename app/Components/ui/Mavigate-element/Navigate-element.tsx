import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import * as MaterialIconsMD from 'react-icons/md'
import { TypeMaterialIconName } from '../../../../shared/types/icon.types'
import styles from './Navigate-element.module.scss'

export const NavigateElement: FC<{ IconText: string, LinkPatch: string, iconName: TypeMaterialIconName }> = ({
                                                                                                               IconText,
                                                                                                               iconName,
                                                                                                               LinkPatch,
                                                                                                             }) => {
  const Icons = MaterialIconsMD[iconName]
  const router = useRouter()
  return (
    <Link href={LinkPatch}>
      <div className={styles.wrapper}>
        <Icons className={router.asPath == LinkPatch ? styles.active : styles.icon} />
        <p className={styles.text}>{IconText}</p>
      </div>
    
    </Link>
  )
}