import type { ReactElement } from 'react'
import { isModalOpen } from '@stores/modalStore'
import styles from './GitButton.module.sass'

export default (props: {
  className?: string,
  children: ReactElement | ReactElement[] | string,
}) => {
  const handleClick = (): void => isModalOpen.set(true)
  return (
    <button
      className={
        props.className
          ? `${props.className} ${styles.button}`
          : styles.button
      }
      onClick={handleClick}>
      {props.children}
    </button>
  )
}
